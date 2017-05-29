@echo off
cd /d %~dp0
set urlC=https://raw.githubusercontent.com/jiayiming/FireLocalSWF/master/
c:\software\aria2\aria2c.exe --allow-overwrite=true %urlC%swf.rar
"c:\Program Files\7-Zip\7z.exe" e swf.rar -o..\swf -aoa
del swf.rar /f /s /q /a
set urlC=https://raw.githubusercontent.com/jiayiming/FireLocalSWF/master/YoukuAntiADs@harv.c.
c:\software\aria2\aria2c.exe --dir=c:\software\pcxfirefox\profiles\chrome\SubScript --allow-overwrite=true %urlC%uc.js
exit
