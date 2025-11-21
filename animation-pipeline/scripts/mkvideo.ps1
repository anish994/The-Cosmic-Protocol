param(
  [Parameter(Mandatory=$true)][string]$FramesDir,
  [Parameter(Mandatory=$true)][string]$Out,
  [int]$Fps=24
)

if (!(Test-Path $FramesDir)) { throw "FramesDir not found: $FramesDir" }

$pattern = Join-Path $FramesDir "*.png"
$first = Get-ChildItem $pattern | Sort-Object Name | Select-Object -First 1
if (!$first) { throw "No PNG frames in $FramesDir" }

$fflist = Join-Path $FramesDir "frames.txt"
Get-ChildItem $pattern | Sort-Object Name | ForEach-Object { "file '$_'`nduration " + (1.0/$Fps) } | Set-Content -Path $fflist -Encoding ascii

# Build with ffmpeg
ffmpeg -f concat -safe 0 -i $fflist -vf "fps=$Fps,format=yuv420p" -y $Out
Remove-Item $fflist -Force
Write-Host "Wrote $Out"
