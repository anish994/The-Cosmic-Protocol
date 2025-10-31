#!/usr/bin/env python3
"""
Validate skill JSON files against the canonical schema.
Usage:
  py tools/validate_skill.py <path-to-json-or-directory> [--schema E:\game1\schemas\skill.schema.json]
"""
import argparse
import json
import sys
from pathlib import Path

try:
    from jsonschema import Draft202012Validator, RefResolver  # type: ignore
except Exception as e:
    print("Missing dependency: jsonschema. Install with: py -m pip install jsonschema", file=sys.stderr)
    sys.exit(2)


def load_schema(schema_path: Path) -> dict:
    with schema_path.open('r', encoding='utf-8') as f:
        return json.load(f)


def iter_json_files(target: Path):
    if target.is_dir():
        for p in target.rglob('*.json'):
            yield p
    else:
        yield target


def validate_file(validator: Draft202012Validator, path: Path) -> bool:
    try:
        with path.open('r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"[FAIL] {path} :: cannot parse JSON :: {e}")
        return False

    def validate_single(obj, label="root"):
        errors = sorted(validator.iter_errors(obj), key=lambda e: e.path)
        if errors:
            print(f"[FAIL] {path} :: {label} :: {len(errors)} error(s)")
            for err in errors:
                loc = "/".join([str(x) for x in err.path]) or "<root>"
                print(f"  - at {loc}: {err.message}")
            return False
        else:
            print(f"[OK]   {path} :: {label}")
            return True

    # Support array-of-skills or single skill object
    if isinstance(data, list):
        ok = True
        for i, obj in enumerate(data):
            ok = validate_single(obj, label=f"item[{i}]") and ok
        return ok
    elif isinstance(data, dict) and data.get("skills") and isinstance(data["skills"], list):
        ok = True
        for i, obj in enumerate(data["skills"]):
            ok = validate_single(obj, label=f"skills[{i}]") and ok
        return ok
    else:
        return validate_single(data)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("target", type=str, help="JSON file or directory containing JSON files")
    parser.add_argument("--schema", type=str, default=str(Path("E:/game1/schemas/skill.schema.json")), help="Path to JSON Schema file")
    args = parser.parse_args()

    schema_path = Path(args.schema)
    schema = load_schema(schema_path)

    base_uri = schema_path.absolute().as_uri()
    resolver = RefResolver(base_uri=base_uri, referrer=schema)
    validator = Draft202012Validator(schema, resolver=resolver)

    target = Path(args.target)
    any_failed = False
    for jf in iter_json_files(target):
        ok = validate_file(validator, jf)
        if not ok:
            any_failed = True

    sys.exit(1 if any_failed else 0)


if __name__ == "__main__":
    main()
