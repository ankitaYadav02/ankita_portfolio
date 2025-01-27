---
title: "How to Cherry Pick Changes in Git: A Simple Guide"
seoTitle: "How to Cherry Pick Changes in Git: A Simple Guide"
seoDescription: "Cherry-picking allows you to apply specific commits from one branch to another. It’s particularly useful when you need to fix issues in production without m"
datePublished: Wed Sep 04 2024 14:46:12 GMT+0000 (Coordinated Universal Time)
cuid: cm0nz15ol000p0ajtawzw9zxo
slug: how-to-cherry-pick-changes-in-git-a-simple-guide
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1725460999467/9016d71d-0069-4bda-a6b7-2a0f4a527230.png
tags: git, frontend-development, github-actions-1

---

In the world of software development, we often make numerous changes to our codebase and deploy these updates to production. However, sometimes we encounter issues in the production environment that require immediate fixes. This is where a handy Git feature called "cherry-pick" can save the day. If you're new to this concept or looking to understand it better, keep reading!

## What is Cherry-Picking in Git?

Cherry-picking is a Git operation that allows you to apply a specific commit from one branch to another branch. This is especially useful when you need to quickly fix a problem in your production environment without including other recent changes.

## Why Use Cherry-Pick?

Imagine you’re working on new features and improvements in your development branch. Suddenly, a critical issue arises in production that needs an urgent fix. You don’t want to merge all your recent changes (which might not be ready or stable) into production. Instead, cherry-picking allows you to apply just the essential fix to production, leaving the rest of your work untouched.

## How to Cherry-Pick a Commit: A Step-by-Step Guide

Let’s walk through the process of cherry-picking a commit to your production branch:

1. **Find the Commit You Want to Cherry-Pick**
    
    First, you need to identify the commit you want to apply. Open your terminal and use the following command to view your commit history:
    
    ```typescript
    git log
    ```
    
    This command will display a list of commits along with their unique commit hashes (SHA). Look for the commit you need and copy its SHA.
    
2. **Switch to Your Production Branch**
    
    Next, you’ll want to switch to your production branch. If your production branch is named `main`, you would use:
    
    ```typescript
    git checkout main
    ```
    
    If your branch has a different name, replace `main` with the appropriate branch name.
    
3. **Cherry-Pick the Commit**
    
    Now, apply the commit to your current branch (your production branch) using the cherry-pick command:
    
    ```typescript
    git cherry-pick <commit-sha>
    ```
    
    Replace `<commit-sha>` with the actual SHA of the commit you copied earlier.
    
4. **Push the Changes**
    
    Finally, push the cherry-picked commit to your production branch:
    
    ```typescript
    git push origin main
    ```
    
    Again, if your production branch is named differently, replace `main` with the correct branch name.
    

### In Summary

Cherry-picking allows you to apply specific commits from one branch to another. It’s particularly useful when you need to fix issues in production without merging all recent changes. By following these simple steps: find the commit SHA, switch to your production branch, cherry-pick the commit, and push the changes.