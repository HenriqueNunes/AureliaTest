@echo off
for /R ..\wwwroot\jspm_packages %%f in (*.d.ts) do copy "%%f" .\aurelia\
