# Clear Next.js cache
Write-Host "Clearing Next.js cache..." -ForegroundColor Yellow
if (Test-Path .next) {
    Remove-Item -Recurse -Force .next
    Write-Host "Cache cleared successfully!" -ForegroundColor Green
} else {
    Write-Host "No cache found." -ForegroundColor Gray
}

Write-Host "`nYou can now run: npm run dev" -ForegroundColor Cyan

