@echo off
color 2E
pushd "%~dp0"
set urlC=haoutil.googlecode.com/svn/trunk/player/
set urlT=noads.mujj.us/swf/
set urlT1=code.taobao.org/svn/noadsplayer/trunk/Adkill_Player_Offline/
set urlP=127.0.0.1:8087

rem echo   ��Ҫ��������update�ļ����������ʼ����~
rem pause>nul
rem del/q update.bat&&wget -N %urlT1%update.bat&&cls
rem if exist update.bat echo.&&echo     ����update�ļ������ɹ����������һ������&&pause>nul&&cls&&goto Select


:Select
cls
echo.
echo                    ��Ƶ��������������½ű�
echo.
echo   ���ű��������ؼ�������չ��ؽż�swf�ಥ�����ļ�
echo.
echo   �����Adkill Player Offline�̵��ʹ�ã���
echo   ����ѡ������ͬһѡ������������ȷ�����³ɹ�
echo   ================================================================
echo.
echo   0��������չ�ű�����ļ�(����swf�ļ�)
echo.
echo   1����ʹ�ô���ֱ�Ӹ���SWF������(gcode��ַ,���£�)
echo.
echo   2��ʹ�ô������SWF������(����������goagent����ͻ���)
echo.
echo   3��ʹ�ñ��õ�ַ(����)���²�����(����δͬ������)
echo.
echo   e���˳���������
echo   ================================================================
echo.

set /p id= ������������Ӧ���к���ĸ�����س���ִ��:
cls

if "%id%"=="0" goto js
if "%id%"=="1" goto http
if "%id%"=="2" goto proxy
if "%id%"=="3" goto bakswf
if "%id%"=="e" goto exit
:err
cls
echo.
echo       �Բ���������������밴������������룡
pause>nul
goto Select

:================================================================================
:js
del/q *.js popup.html
rem wget -N -c %urlT1%updateSWF.bat -O updateSWF+N.bat
wget -N -c %urlT1%function.js
wget -N -c %urlT1%rulelist.js
wget -N -c %urlT1%popup.js
wget -N -c %urlT1%popup.html
rem wget -N -c %urlT1%manifest.json
rem wget -N -c %urlT1%script.js

echo ���нű���������ɣ������������ʹ�ã�����������أ���&&pause>nul
goto :Select

:http

::youku
wget -N -c -P ./swf/ %urlC%testmod/loader.swf
wget -N -c -P ./swf/ %urlC%testmod/player.swf

::ku6
wget -N -c -P ./swf/ %urlD%ku6.swf
wget -N -c -P ./swf/ %urlD%ku6_out.swf

::iqiyi&pps
wget -N -c -P ./swf/ %urlC%testmod/iqiyi_out.swf
wget -N -c -P ./swf/ %urlC%testmod/iqiyi5.swf
wget -N -c -P ./swf/ %urlC%testmod/iqiyi.swf
wget -N -c -P ./swf/ %urlC%testmod/pps.swf

::tudou
wget -N -c -P ./swf/ %urlC%testmod/tudou.swf
rem wget -N -c -P ./swf/ %urlC%testmod/olc_8.swf
rem wget -N -c -P ./swf/ %urlC%testmod/sp.swf

::letv
wget -N -c -P ./swf/ %urlC%testmod/letv.swf
wget -N -c -P ./swf/ %urlT%letv0225.swf
rem wget -N -c -P ./swf/ http://player.letvcdn.com/p/201403/05/1456/newplayer/1/SLetvPlayer.swf

::pplive
rem wget -N -c -P ./swf/ %urlC%pplive.swf
rem wget -N -c -P ./swf/ %urlC%pplive_live.swf

::sohu
wget -N -c -P ./swf/sohu/ %urlC%testmod/sohu.swf
wget -N -c -P ./swf/sohu/ %urlC%testmod/sohu_live.swf
wget -N -c -P ./swf/sohu/otherCore/ %urlT%otherCore/PLVideoCore.swf
wget -N -c -P ./swf/sohu/panel/ %urlT%panel/SettingPanel.swf

goto 17173

pause
goto :Select

::======================================================================
:proxy

::iqiyi
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/iqiyi.swf
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/iqiyi_out.swf
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/iqiyi5.swf
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/pps.swf

::letv
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/letv.swf
wget -N -c -P ./swf/ %urlT%letv0225.swf


:youku
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/player.swf
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/loader.swf

::tudou
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/tudou.swf
rem wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/olc_8.swf
rem wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/sp.swf

::ku6
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/ku6.swf
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%ku6_out.swf

::pplive
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%pplive.swf
wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%pplive_live.swf

::sohu
wget -P ./swf/sohu/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/sohu.swf
wget -P ./swf/sohu/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/sohu_live.swf
wget -N -c -P ./swf/sohu/otherCore/ %urlT%otherCore/PLVideoCore.swf
wget -N -c -P ./swf/sohu/panel/ %urlT%panel/SettingPanel.swf

::other
rem wget -P ./swf/ -N -c -t 3 -e "http_proxy=http://%urlP%" http://%urlC%testmod/empty.bin

goto 17173

pause
goto :Select

::=======================================================================
:bakswf

::youku
wget -N -c -P ./swf/ %urlT%loader.swf
wget -N -c -P ./swf/ %urlT%player.swf

::ku6
wget -N -c -P ./swf/ %urlT%ku6.swf
wget -N -c -P ./swf/ %urlT%ku6_out.swf

::iqiyi&pps
wget -N -c -P ./swf/ %urlT%iqiyi_out.swf
wget -N -c -P ./swf/ %urlT%iqiyi5.swf
wget -N -c -P ./swf/ %urlT%iqiyi.swf
wget -N -c -P ./swf/ %urlT%pps.swf

::tudou
wget -N -c -P ./swf/ http://code.taobao.org/svn/noadsplayer/trunk/Player/tudou.swf
rem wget -N -c -P ./swf/ %urlT%tudou.swf
rem wget -N -c -P ./swf/ %urlT%olc_8.swf
rem wget -N -c -P ./swf/ %urlT%sp.swf

::letv
wget -N -c -P ./swf/ %urlT%letv.swf
wget -N -c -P ./swf/ %urlT%letv0225.swf
rem wget -N -c -P ./swf/ http://player.letvcdn.com/p/201403/05/1456/newplayer/1/SLetvPlayer.swf

::pplive
rem wget -N -c -P ./swf/ %urlT%pplive.swf
rem wget -N -c -P ./swf/ %urlT%pplive_live.swf

::sohu
wget -N -c -P ./swf/sohu/ %urlT%sohu.swf
wget -N -c -P ./swf/sohu/ %urlT%sohu_live.swf
wget -N -c -P ./swf/sohu/otherCore/ %urlT%otherCore/PLVideoCore.swf
wget -N -c -P ./swf/sohu/panel/ %urlT%panel/SettingPanel.swf

:17173
wget -P ./swf/17173/ -N -c %urlT%17173.in.Vod.swf
wget -P ./swf/17173/ -N -c %urlT%17173.in.Live.swf
wget -P ./swf/17173/ -N -c %urlT%17173.out.Vod.swf
wget -P ./swf/17173/ -N -c %urlT%17173.out.Live.swf
wget -P ./swf/17173/ -N -c %urlT%FilePlayer.swf
wget -P ./swf/17173/ -N -c %urlT%StreamPlayer.swf
wget -P ./swf/17173/ -N -c %urlT%Gifts.swf
wget -P ./swf/17173/ -N -c %urlT%ST.swf

echo       ����swf������������ɣ������������ʹ�ã�������������˵�����&&pause>nul
goto :Select
