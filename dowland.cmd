@echo off

echo Modüller yukleniyor...
call npm i
IF %ERRORLEVEL% NEQ 0 (
    echo Gereksinimler yuklenirken hata olustu.
    exit /b 1
)

echo Modüller guncelleniyor...
call npm update
IF %ERRORLEVEL% NEQ 0 (
    echo Gereksinimler guncellenirken hata olustu.
    exit /b 1
)

echo FantasticShop V15 Hunting Bot baslatiliyor...
node .

pause
