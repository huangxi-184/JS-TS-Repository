@echo off
setlocal enabledelayedexpansion
set /a count=0

:loop
curl https://api.vvhan.com/api/joke
echo. 
echo.


set /a count+=1
if !count! geq 100 (
    cls
    set count=0
)

timeout /t 10 > nul
goto loop
