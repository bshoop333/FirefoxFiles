
@echo off
color 2E
pushd "%~dp0"
set urlC=bitbucket.org/kafan15536900/haoutil/raw/master/player/
rem set urlC=haoutil.googlecode.com/svn/trunk/player/
set urlM=code.taobao.org/svn/noadsplayer/trunk/Player/
set urlT=noads.b0.upaiyun.com/swf/
rem set urlT=noads.aliapp.com/swf/
rem set urlT=noads.mujj.us/swf/
set urlT1=code.taobao.org/svn/noadsplayer/trunk/Adkill_Player_Offline/
set urlP=127.0.0.1:8087
cls
echo    ============================================
echo    #               ����ע�⣡��               #
echo    ============================================
echo   ���θ��£�
echo   1������һ����ѡ�ű�ѡ��ص�����Ȼ�����ſ��ض��򲥷����ķ�������
echo      �˷���������ַ��������Ĺ�浹��ʱ�����ǻ����2100����Ҳ����rmtp����
echo   2����ɾ�����ܲ�������letv0225.swf��pps.swf��sohu�����ļ���
echo.
echo   ��Chrome39�汾����չ��������֤����!
echo   ��39�����ϰ汾�û�ת��ADFree�°档
echo   �����˵��ʹ��Bat�ļ����º���չ����ʾ����Ҫ�޸���
echo   Ŀǰ������֤���Ʋ���,�޷��ƹ���
echo   ��39�����ϰ汾�û�ת��ADFree�°棨�ٴ�˵��������
echo.
echo   --------------------------------------------
echo   ��ȷ�ϣ�Ȼ���������������
echo.
rem echo   ��Ҫ��������update�ļ�����������~
rem del/q update.bat&&wget -N %urlT1%update.bat&&cls
rem if exist update.bat echo.&&echo     ����update�ļ������ɹ���
pause>nul

:Select
cls
echo.
echo                    ��Ƶ��������������½ű�
echo.
echo   ���ű��������ؼ�������չ��ؽż�swf�ಥ�����ļ�
echo.
echo   �����Adkill Player Offline�̵��ʹ�ã���
echo   ���ڵ���31�汾���û����̵�治���ã������н�ѹɾ����-�����ļ����Լ������װ��
echo   ����ѡ������ͬһѡ������������ȷ�����³ɹ�
echo   ================================================================
echo.
echo   0��������չ�ű�����ļ�(����swf�ļ���)
echo.
echo   r�����½ű��ļ�(��ѡ��Ϊ�ſ��滻���ض��������rmtp���󣬲���swf�ļ���)
echo      ע��:����Ҫʹ�ø�ģʽ����Ҫ��ʹ���������º���������¸�ѡ�
echo.
echo   1����ʹ�ô���ֱ�Ӹ���SWF������(bitbucket���£���Ҫȫ���������أ��ٶ�����)
echo.
echo   2�����Ҫ��ʹ�ô������SWF������(bitbucket��ַ������������goagent����ͻ���)
echo.
echo   3��ʹ�ñ��õ�ַ(����)���²�����(�Ƽ�������δͬ������)
echo.
echo   4��Ϊupdate.bat���������ݷ�ʽ(������������)
echo.
echo   e���˳���������ͬʱ������ʱ�ļ�����
echo   ================================================================
echo.
echo   �ر�˵��������һ����ѡ�ű�ѡ��ص�����Ȼ�����ſ��ض��򲥷����ķ�������
echo   �˷���������ַ��������Ĺ�浹��ʱ�����ǻ����2100����Ҳ����rmtp����
echo   ����Ҫ��ѡ��ʹ�á�
echo.
set /p id= ������������Ӧ���к���ĸ�����س���ִ��:
cls

if "%id%"=="0" goto js
if "%id%"=="r" goto ykr
if "%id%"=="1" goto http
if "%id%"=="2" goto proxy
if "%id%"=="3" goto bakswf
if "%id%"=="4" goto lnk
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
wget -N %urlT1%function.js
wget -N %urlT1%rulelist.js
wget -N %urlT1%popup.js
wget -N %urlT1%popup.html
rem wget -N %urlT1%manifest.json
rem wget -N %urlT1%script.js

echo   ���ڲ��Ҳ�ɾ��letv0225.swf��sohu.swf�����ļ�......
if exist ".\swf\letv0225.swf" (del /q/s ".\swf\letv0225.swf">nul)
if exist ".\swf\sohu.swf" (del /q/s ".\swf\sohu.swf">nul)
if exist ".\swf\sohu\sohu.swf" (del /q/s ".\swf\sohu\sohu.swf">nul)
if exist ".\swf\pps.swf" (del /q/s ".\swf\pps.swf">nul)
if exist ".\swf\iqiyi5old.swf" (del /q/s ".\swf\iqiyi5old.swf">nul)
if exist ".\swf\iqiyi_outold.swf" (del /q/s ".\swf\iqiyi_outold.swf">nul)

echo.
echo   �ļ���ɾ����
echo   ���нű���������ɣ�
echo   �����������ʹ�ã�����������أ���&&pause>nul
goto :Select

:ykr
del/q rulelist.js
wget -N %urlT1%rulelistR.js -O rulelist.js
echo ��������ϰ汾iqiyi֧��swf...
if NOT exist ".\swf\iqiyi5old.swf" (wget -N -P ./swf/ %urlM%iqiyi5old.swf)
rem if NOT exist ".\swf\iqiyi_outold.swf" (wget -N -P ./swf/ %urlM%iqiyi_outold.swf)
echo.
echo   iqiyi5old�ļ�����ӣ�
echo   �ű���������ɣ�
echo   �����������ʹ�ã�����������أ���&&pause>nul
goto :Select

:http

::youku
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/loader.swf
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/player.swf

::ku6 //�ò��������δ���£�ֹͣ���أ�
wget --no-check-certificate -N -P ./swf/ %urlT%ku6.swf
wget --no-check-certificate -N -P ./swf/ %urlT%ku6_out.swf

::iqiyi&pps
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/iqiyi_out.swf
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/iqiyi5.swf
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/iqiyi.swf
rem wget --no-check-certificate -N -P ./swf/ %urlC%testmod/pps.swf

::tudou
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/tudou.swf
rem wget --no-check-certificate -N -P ./swf/ %urlC%testmod/olc_8.swf
rem wget --no-check-certificate -N -P ./swf/ %urlC%testmod/sp.swf

::letv
wget --no-check-certificate -N -P ./swf/ %urlC%testmod/letv.swf
rem wget --no-check-certificate -N -P ./swf/ %urlT%letv0225.swf
rem wget --no-check-certificate -N -P ./swf/ http://player.letvcdn.com/p/201403/05/1456/newplayer/1/SLetvPlayer.swf

::pplive
wget --no-check-certificate -N %urlC%player4player2.swf -O pplive_live.swf
wget --no-check-certificate -N %urlT%pptv.in.Ikan.swf -O pplive.swf
rem wget --no-check-certificate -N %urlT%pptv.in.Live.swf -O pplive_live.swf
move pplive*.swf ./swf/

::sohu
wget --no-check-certificate -N -P ./swf/sohu/ %urlC%testmod/sohu.swf
wget --no-check-certificate -N -P ./swf/sohu/ %urlC%testmod/sohu_live.swf
wget -N -P ./swf/sohu/otherCore/ %urlT%otherCore/PLVideoCore.swf
wget -N -P ./swf/sohu/otherCore/ %urlT%otherCore/AlbumCore.swf
wget -N -P ./swf/sohu/panel/ %urlT%panel/SettingPanel.swf

goto 17173
::======================================================================
:proxy

::iqiyi
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/iqiyi.swf
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/iqiyi_out.swf
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/iqiyi5.swf
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/pps.swf

::letv
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/letv.swf
rem wget -N -P ./swf/ %urlT%letv0225.swf


:youku
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/player.swf
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/loader.swf

::tudou
wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/tudou.swf
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/olc_8.swf
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/sp.swf

::ku6 //�Ĳ��������δ���£�ֹͣ���أ�
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/ku6.swf
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%ku6_out.swf

::pplive
wget -N %urlT%pptv.in.Ikan.swf -O pplive.swf
wget -N %urlT%pptv.in.Live.swf -O pplive_live.swf
move pplive*.swf ./swf/
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%pplive.swf
rem wget --no-check-certificate -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%pplive_live.swf

::sohu
rem wget -P ./swf/sohu/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/sohu.swf
wget --no-check-certificate -P ./swf/sohu/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/sohu_live.swf
wget -N -P ./swf/sohu/otherCore/ %urlT%otherCore/PLVideoCore.swf
wget -N -P ./swf/sohu/otherCore/ %urlT%otherCore/AlbumCore.swf
wget -N -P ./swf/sohu/panel/ %urlT%panel/SettingPanel.swf

::other
rem wget -P ./swf/ -N -t 3 -e "https_proxy=http://%urlP%" https://%urlC%testmod/empty.bin

goto 17173

::=======================================================================
:bakswf

::youku
wget -N -P ./swf/ %urlT%loader.swf
wget -N -P ./swf/ %urlT%player.swf

::ku6
wget -N -P ./swf/ %urlT%ku6.swf
wget -N -P ./swf/ %urlT%ku6_out.swf

::iqiyi&pps
wget -N -P ./swf/ %urlT%iqiyi_out.swf
wget -N -P ./swf/ %urlT%iqiyi5.swf
wget -N -P ./swf/ %urlT%iqiyi.swf
rem wget -N -P ./swf/ %urlM%pps.swf

::tudou
wget -N -P ./swf/ %urlT%tudou.swf
rem wget -N -P ./swf/ %urlT%tudou.swf
rem wget -N -P ./swf/ %urlT%olc_8.swf
rem wget -N -P ./swf/ %urlT%sp.swf

::letv
wget -N -P ./swf/ %urlT%letv.swf
rem wget -N -P ./swf/ %urlT%letv0225.swf
rem wget -N -P ./swf/ http://player.letvcdn.com/p/201403/05/1456/newplayer/1/SLetvPlayer.swf

::pplive
wget -N %urlT%pptv.in.Ikan.swf -O pplive.swf
wget -N %urlT%pptv.in.Live.swf -O pplive_live.swf
move /y pplive*.swf ./swf/

::sohu
rem wget -N -P ./swf/sohu/ %urlT%sohu.swf
wget -N -P ./swf/sohu/ %urlT%sohu_live.swf
wget -N -P ./swf/sohu/otherCore/ %urlT%otherCore/PLVideoCore.swf
wget -N -P ./swf/sohu/otherCore/ %urlT%otherCore/AlbumCore.swf
wget -N -P ./swf/sohu/panel/ %urlT%panel/SettingPanel.swf

:17173
rd /q/s ".\swf\17173\"
wget -P ./swf/17173/ -N %urlM%17173/17173.in.Vod.swf
wget -P ./swf/17173/ -N %urlM%17173/17173.in.Live.swf
wget -P ./swf/17173/ -N %urlM%17173/17173.out.Vod.swf
wget -P ./swf/17173/ -N %urlM%17173/17173.out.Live.swf
wget -P ./swf/17173/ -N %urlM%17173/FilePlayer.swf
wget -P ./swf/17173/ -N %urlM%17173/StreamPlayer.swf
wget -P ./swf/17173/ -N %urlM%17173/Gifts.swf
wget -P ./swf/17173/ -N %urlM%17173/ST.swf

echo       ����swf������������ɣ������������ʹ�ã�������������˵�����&&pause>nul
goto :Select

:lnk
mshta VBScript:Execute("Set a=CreateObject(""WScript.Shell""):Set b=a.CreateShortcut(a.SpecialFolders(""Desktop"") & ""\ADkill��������.lnk""):b.TargetPath=""%~dp0update.bat"":b.WorkingDirectory=""%~dp0"":b.Save:close")
echo  ������ݷ�ʽ��ɣ�������������˵�����&&pause>nul
goto :Select

:exit
del %0&&exit
