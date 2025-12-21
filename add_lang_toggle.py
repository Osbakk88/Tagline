import os

files = [
    'appointments.html', 'contacts.html', 'dashboard.html', 'documents.html',
    'medications.html', 'notes.html', 'profile.html', 'report.html',
    'settings.html', 'symptoms.html', 'vitals.html', 'index.html'
]

old_hamburger = '''<button class="hamburger" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>'''

new_controls = '''<div class="header-controls">
            <button class="lang-toggle" aria-label="Switch Language">NO</button>
            <button class="hamburger" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>'''

for file in files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            content = f.read()
        
        if old_hamburger in content:
            content = content.replace(old_hamburger, new_controls)
            with open(file, 'w') as f:
                f.write(content)
            print(f'Updated {file}')
        else:
            print(f'Warning: Hamburger not found in {file}')
