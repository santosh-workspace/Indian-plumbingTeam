@echo off
REM ============================================================
REM  Rescue Plumbers Plus - download brand images locally
REM  Run this once from the "website" folder:  download-assets.bat
REM  It saves the logo and service icons into public\images so the
REM  site no longer depends on the old website staying online.
REM ============================================================

set DEST=public\images
if not exist "%DEST%" mkdir "%DEST%"

set BASE=https://rescueplumbersplus.co.uk/wp-content/uploads

echo Downloading brand images into %DEST% ...

curl -L -o "%DEST%\logo.png"           "%BASE%/2020/10/RPP_Logo-300x298.png"
curl -L -o "%DEST%\icon-diagnosis.png" "%BASE%/2020/10/Wrenching.png"
curl -L -o "%DEST%\icon-leak-pipe.png" "%BASE%/2020/10/Valve.png"
curl -L -o "%DEST%\icon-taps.png"      "%BASE%/2020/10/Tubs-and-Shower.png"
curl -L -o "%DEST%\icon-drains.png"    "%BASE%/2020/10/Unclogging.png"
curl -L -o "%DEST%\icon-quote.jpg"     "%BASE%/2020/10/25504-scaled.jpg"
curl -L -o "%DEST%\icon-24-7.jpg"      "%BASE%/2020/10/24-hours-icon-25.jpg"
curl -L -o "%DEST%\icon-leak-stop.png" "%BASE%/2020/10/Leak.png"
curl -L -o "%DEST%\icon-appliance.png" "%BASE%/2020/10/images.png"
curl -L -o "%DEST%\rated-people.png"   "%BASE%/2020/11/rated-people-logo.png"
curl -L -o "%DEST%\yell.gif"           "%BASE%/2020/11/yellowpages.gif"

echo.
echo Done. Images saved to %DEST%.
echo If any file is 0 KB, that image may have moved - tell Claude and we will fix the URL.
pause
