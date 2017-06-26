#!/bin/sh

set -e

git checkout master
git push

git checkout cart-01-header-footer
git rebase master
git push -u origin cart-01-header-footer --force-with-lease

git checkout cart-02-props
git rebase cart-01-header-footer
git push -u origin cart-02-props --force-with-lease

git checkout cart-03-item-list
git rebase cart-02-props
git push -u origin cart-03-item-list --force-with-lease

git checkout cart-04-add-item
git rebase cart-03-item-list
git push -u origin cart-04-add-item --force-with-lease

git checkout cart-05-calculate-total
git rebase cart-04-add-item
git push -u origin cart-05-calculate-total --force-with-lease

git checkout cart-06-deploy
git rebase cart-05-calculate-total
git push -u origin cart-06-deploy --force-with-lease