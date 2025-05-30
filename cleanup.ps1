# Remove specific feature directories from src/app
Remove-Item -Path "src/app/schedule" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/employee" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/inbox" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/payroll" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/recruitment" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/account" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/ai-review" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/app/dashboard" -Recurse -Force -ErrorAction SilentlyContinue

# Remove specific components
Remove-Item -Path "src/components/Schedule" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/Payroll" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/Recruitment" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/Employee" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/Inbox" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/Account" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/AIReview" -Recurse -Force -ErrorAction SilentlyContinue

# Remove specific component files
Remove-Item -Path "src/components/nav-user.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/pricing.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/register-form.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/section-cards.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/settings-dialog.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/stats-4.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/team.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/testimonials.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/content-2.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/faqs-4.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/features-8.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/footer.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/hero-section.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/hero5-header.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/logo-cloud.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/nav-documents.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/nav-main.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/nav-secondary.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/call-to-action.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/chart-area-interactive.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/app-sidebar.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "src/components/EmployeeTable.tsx" -Force -ErrorAction SilentlyContinue 