@ECHO OFF
CLS
title PassFirefoxSign 2016.08.08.20 make by catcat520
ECHO 反馈 : http://bbs.kafan.cn/thread-2051375-1-1.html
ECHO 源至 : https://forum.mozilla-russia.org/viewtopic.php?id=70326
REM Model : get the real cmd run path
SET realcmdrunpath=
REM debug for /f %%i in ('echo %0') do echo %%~dpi
REM ECHO for /f %%i in ('echo %0') DO SET realcmdrunpath="%%~dpi"
for /f "delims=?" %%i in ('echo %0') DO SET realcmdrunpath="%%~dpi"
REM ECHO cd /d "%realcmdrunpath%"
cd /d "%realcmdrunpath%"
REM ECHO "%cd%"
ECHO.
IF NOT EXIST firefox.exe (
ECHO Fail，补丁失败，请把我放在跟 firefox.exe 同一目录里面！
START /min mshta vbscript:createobject^("sapi.spvoice"^).speak^("补丁安装失败，请把 补丁 放在跟 火~狐~ 同一个目录里面"^)^(window.close^)
GOTO :END
)
REM right test
ATTRIB +a firefox.exe|FIND "-">NUL&& (
ECHO Fail，补丁失败，权限不足，需要管理员权限运行补丁！
START /min mshta vbscript:createobject^("sapi.spvoice"^).speak^("补丁安装失败，权限不足，需要管理员权限运行补丁"^)^(window.close^)
GOTO :END
)
IF EXIST firefox.exe (
REM passign.js
ECHO //>passign.js
ECHO try {>>passign.js
ECHO Components.utils.import^("resource://gre/modules/addons/XPIProvider.jsm", {}^)>>passign.js
ECHO .eval^("SIGNED_TYPES.clear()"^);>>passign.js
ECHO }>>passign.js
ECHO catch^(ex^) {}>>passign.js
REM catcat520.js
ECHO pref^("general.config.obscure_value",0^);>defaults\pref\catcat520.js
ECHO pref^("general.config.filename","passign.js"^);;>>defaults\pref\catcat520.js
ECHO Success，补丁成功，现在安装一个未签名的扩展试试看吧！
START /min mshta vbscript:createobject^("sapi.spvoice"^).speak^("补丁安装成功..."^)^(window.close^)
)
:end
ECHO.
pause 