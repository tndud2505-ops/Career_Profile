@echo off
cd /d "%~dp0"
set PORT=5180
start "" http://127.0.0.1:%PORT%/
py -3 -m http.server %PORT% --bind 127.0.0.1
if errorlevel 1 python -m http.server %PORT% --bind 127.0.0.1
