@ECHO OFF
CLS
title PassFirefoxSign 2016.08.08.20 make by catcat520
ECHO ���� : http://bbs.kafan.cn/thread-2051375-1-1.html
ECHO Դ�� : https://forum.mozilla-russia.org/viewtopic.php?id=70326
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
ECHO Fail������ʧ�ܣ�����ҷ��ڸ� firefox.exe ͬһĿ¼���棡
START /min mshta vbscript:createobject^("sapi.spvoice"^).speak^("������װʧ�ܣ���� ���� ���ڸ� ��~��~ ͬһ��Ŀ¼����"^)^(window.close^)
GOTO :END
)
REM right test
ATTRIB +a firefox.exe|FIND "-">NUL&& (
ECHO Fail������ʧ�ܣ�Ȩ�޲��㣬��Ҫ����ԱȨ�����в�����
START /min mshta vbscript:createobject^("sapi.spvoice"^).speak^("������װʧ�ܣ�Ȩ�޲��㣬��Ҫ����ԱȨ�����в���"^)^(window.close^)
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
ECHO Success�������ɹ������ڰ�װһ��δǩ������չ���Կ��ɣ�
START /min mshta vbscript:createobject^("sapi.spvoice"^).speak^("������װ�ɹ�..."^)^(window.close^)
)
:end
ECHO.
pause 