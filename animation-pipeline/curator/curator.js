/* Frame Curator - Interactive animation sequencer */
(function() {
  const COLLAGE_DIRS = [
    'mountain_golam_collage1',
    'mountain_golam_collage2',
    'mountain_golam_collage3'
  ];

  let allFrames = [];  // { path: string, name: string, collage: string }
  let sequence = [];   // selected frame indices in order

  const els = {
    browser: document.getElementById('frame-browser'),
    sequenceList: document.getElementById('sequence'),
    btnClear: document.getElementById('btn-clear'),
    btnExport: document.getElementById('btn-export')
  };

  // Load manifest from each collage folder
  async function loadFrames() {
    for (const dir of COLLAGE_DIRS) {
      try {
        const resp = await fetch(`./${dir}/manifest.json`);
        if (!resp.ok) continue;
        const manifest = await resp.json();
        for (const item of manifest) {
          allFrames.push({
            path: `./${dir}/${item.file}`,
            name: item.file,
            collage: dir
          });
        }
      } catch (e) {
        console.warn(`Failed to load ${dir}:`, e);
      }
    }
    console.log(`Loaded ${allFrames.length} frames`);
    renderBrowser();
  }

  function renderBrowser() {
    els.browser.innerHTML = '';
    for (let i = 0; i < allFrames.length; i++) {
      const frame = allFrames[i];
      const div = document.createElement('div');
      div.className = 'frame-thumb';
      div.title = frame.name;

      const img = document.createElement('img');
      img.src = frame.path;
      img.draggable = false;

      const label = document.createElement('div');
      label.className = 'label';
      label.textContent = `${i + 1}`;

      div.appendChild(img);
      div.appendChild(label);
      div.addEventListener('click', () => addToSequence(i));

      els.browser.appendChild(div);
    }
  }

  function addToSequence(frameIdx) {
    sequence.push(frameIdx);
    renderSequence();
  }

  function renderSequence() {
    els.sequenceList.innerHTML = '';
    for (let i = 0; i < sequence.length; i++) {
      const frameIdx = sequence[i];
      const frame = allFrames[frameIdx];

      const div = document.createElement('div');
      div.className = 'seq-item';
      div.draggable = true;
      div.dataset.idx = i;

      const img = document.createElement('img');
      img.src = frame.path;

      const info = document.createElement('div');
      info.className = 'info';
      info.innerHTML = `<strong>${i + 1}</strong>. ${frame.name}<br><small>${frame.collage}</small>`;

      const btn = document.createElement('button');
      btn.textContent = '✕';
      btn.className = 'remove';
      btn.addEventListener('click', () => {
        sequence.splice(i, 1);
        renderSequence();
      });

      div.appendChild(img);
      div.appendChild(info);
      div.appendChild(btn);

      // Drag support for reordering
      div.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('seqIdx', i);
      });
      div.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        div.style.opacity = '0.5';
      });
      div.addEventListener('dragleave', () => {
        div.style.opacity = '1';
      });
      div.addEventListener('drop', (e) => {
        e.preventDefault();
        div.style.opacity = '1';
        const srcIdx = parseInt(e.dataTransfer.getData('seqIdx'));
        if (srcIdx !== i) {
          const tmp = sequence[srcIdx];
          sequence[srcIdx] = sequence[i];
          sequence[i] = tmp;
          renderSequence();
        }
      });

      els.sequenceList.appendChild(div);
    }
  }

  els.btnClear.addEventListener('click', () => {
    sequence = [];
    renderSequence();
  });

  els.btnExport.addEventListener('click', () => {
    if (sequence.length === 0) {
      alert('No frames selected');
      return;
    }
    const data = {
      name: 'Mountain Golam',
      frames: sequence.map(idx => allFrames[idx].path),
      count: sequence.length,
      exported_at: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mountain_golam_sequence.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  loadFrames();
})();
