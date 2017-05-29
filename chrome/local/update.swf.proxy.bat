@echo off
cd /d %~dp0
set urlC=https://raw.githubusercontent.com/jiayiming/FireLocalSWF/master/
set /p proxy=local port:
c:\software\aria2\aria2c.exe --all-proxy=http://127.0.0.1:%proxy% --allow-overwrite=true %urlC%swf.rar
"c:\Program Files\7-Zip\7z.exe" e swf.rar -o..\swf -aoa
del swf.rar /f /s /q /a
set urlC=https://raw.githubusercontent.com/jiayiming/FireLocalSWF/master/YoukuAntiADs@harv.c.
c:\software\aria2\aria2c.exe --all-proxy=http://127.0.0.1:1080 --dir=c:\software\pcxfirefox\profiles\chrome\SubScript --allow-overwrite=true %urlC%uc.js
:: "c:\software\pcxfirefox\browser\firefox.exe" "https://raw.githubusercontent.com/jiayiming/FireLocalSWF/master/YoukuAntiADs@harv.c.uc.js"
exit
