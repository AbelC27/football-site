# 🚀 QUICK DEPLOYMENT GUIDE

## ⚡ Fast Track to Vercel (5 Steps)

### Step 1: Create GitHub Account
👉 Go to: https://github.com/signup
- Sign up with your email
- Verify your email

### Step 2: Create New Repository
👉 Go to: https://github.com/new
- Name: `volleyball-website`
- Public repository
- ✅ Add README
- Click "Create repository"

### Step 3: Copy These Commands

**Open PowerShell and paste these commands ONE BY ONE:**

```powershell
# Go to your project
cd D:\PIUG\football-site

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Volleyball website"

# REPLACE 'YOUR-USERNAME' with your actual GitHub username!
git remote add origin https://github.com/YOUR-USERNAME/volleyball-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**⚠️ IMPORTANT:** Replace `YOUR-USERNAME` with your actual GitHub username!

**If asked for password:** Use a GitHub Personal Access Token (not your password)
- Get it here: https://github.com/settings/tokens
- Click "Generate new token (classic)"
- Check "repo" box
- Copy the token and use it as password

### Step 4: Deploy on Vercel
👉 Go to: https://vercel.com/signup

1. Click **"Continue with GitHub"**
2. Authorize Vercel
3. Click **"Add New..."** → **"Project"**
4. Find your `volleyball-website` repo
5. Click **"Import"**
6. Click **"Deploy"** (don't change anything)
7. ⏳ Wait 2-3 minutes...
8. ✅ **DONE!** Your site is live!

### Step 5: Get Your URL
Your website will be at:
**`https://volleyball-website.vercel.app`**

Or something similar like:
**`https://volleyball-website-abc123.vercel.app`**

---

## 🎉 That's It!

**Your website is now PUBLIC and accessible to anyone!**

Share your URL with friends, teachers, or add it to your resume! 🌐

---

## 🔄 To Update Your Website Later

After making changes to your code:

```powershell
git add .
git commit -m "Updated website"
git push
```

**Vercel automatically updates your live site!** 🚀

---

## 📞 Need Help?

See the full guide: **DEPLOY_TO_VERCEL.md**

Or watch this 5-minute video: https://www.youtube.com/watch?v=2HBIzEx6IZA

---

## ⚡ Super Quick Visual Guide

```
You (Local Computer)
    ↓ git push
GitHub (Code Storage)
    ↓ auto-deploy
Vercel (Hosting)
    ↓
🌐 PUBLIC WEBSITE
```

**Total time: ~10 minutes!** ⏱️
