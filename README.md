redmine_theme_sparse
====================

This is the stock [redmine](http://www.redmine.org/) theme but it hides the 'top-menu', the 'header', and the 'sidebar'. 

The theme automatically refreshes every 30 sec, via a full page refresh.

Example Use Case
----------

This theme is very useful for a projector, or flatscreen operation office status view. It should *not* be used as a system wide theme.

### Screenshots
------------------------

![Overview Screenshot](https://raw.github.com/shadowbq/redmine_theme_sparse/master/screenshots/screenshot-theme.jpg
 "Overview")

Dependencies
---------

Please use this theme in conjunction with the following redmine plugin:

[R-labs Themechanger](http://www.r-labs.org/projects/themechanger) verified on redmine v2.3 09 Apr 2013.

[redmine themechanger wiki](http://www.redmine.org/plugins/themechanger)


Installation
----------

Download the theme

```shell
$ cd {REDMINE_ROOT}
$ git clone https://github.com/shadowbq/redmine_theme_sparse public/themes/redmine_theme_sparse
```

This would result in a directory-path to application.css like:

`../public/themes/redmine_theme_sparse/stylesheets/application.css`

You now may need to restart Redmine so that it shows the newly installed theme in the list of available themes.

Create Filters
-----------

Prior to setting the theme, which is very minimalistic, create and save the filters that the user will view while noting the filter number. 

Using the All Issues default filter: `https://redmine.foo.com/issues?set_filter=1`


Set theme for User
------------

Login to redmine with the a new user that has permissions *(aka. projector)*: 

Navigate to Users Profile (requires themechanger plugin) via `My Account` on the title bar.

Select your newly created theme `redmine_theme_sparse` in the "Theme" drop-down list. 

*Save your settings.*

Redmine should now be displayed using the selected theme for this user.

**NOTE:** Navigation requires the user to put the direct links in the url bar once the theme is applied.

Static Links to Use
----------

Global Issues - `https://redmine.foo.com/issues`

Global Calendar - `https://redmine.foo.com/issues/calendar`

User Profile - `https://redmine.foo.com/my/account`

