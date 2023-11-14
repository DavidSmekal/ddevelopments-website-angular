# DDevelopments Website

## About
Portfolio website for David Smekal, written in Angular

## How to upload to Netlify with Scully
1. Do changes in GitHub as normal.
2. When it's time to upload, we need to pre-render the site with Scully:
   1. Delete the entire `dist` folder
   2. Run `ng build`
   3. Run `npx scully --project ddevelopments-website-angular`
3. If I want to test if it worked, run `npx scully serve`
4. Push the code to the repository.

