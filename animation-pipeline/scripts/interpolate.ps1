param(
  [Parameter(Mandatory=$true)][string]$In,
  [Parameter(Mandatory=$true)][string]$Out,
  [int]$Fps=24
)

ffmpeg -hide_banner -loglevel error -i $In -vf "minterpolate=mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=$Fps" -y $Out
Write-Host "Interpolated -> $Out at $Fps fps"
