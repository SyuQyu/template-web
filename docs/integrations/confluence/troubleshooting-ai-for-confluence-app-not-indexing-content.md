---
description: Common troubleshooting steps for indexing issues with AI for Confluence app
---

# Troubleshooting: AI for Confluence App Not Indexing Content

If you are experiencing issues with the AI for Confluence add-on not indexing content, there are a few common reasons why this might be happening. Follow the troubleshooting steps below to identify and resolve the issue.

## Common Reasons Why Content is Not Indexed <a href="#h_41c2cb31f4" id="h_41c2cb31f4"></a>

### 1. The Bot Lacks Proper Permissions <a href="#h_68f03c773e" id="h_68f03c773e"></a>

The AI for Confluence/AI Chat bot requires appropriate permissions to access and index content within Confluence spaces. If the bot does not have the correct permissions, it will not be able to retrieve and process pages.

Solution: To fix permission issues, follow these steps:

1. Navigate to the Confluence Space where the content is located.
2. Click on Space Settings in the left-hand sidebar.
3. Go to Space Access.
4. Click "Edit"
5.  Add ChatGPT for Confluence / AI for Confluence to the users list.\
    ​

    [![](https://downloads.intercomcdn.com/i/o/lnz0cfjq/1388318314/abb4c5a49716ab4fef72dfbca67d/image.png?expires=1753407000\&signature=5ead98c81dd22a71451ae7c71b9351a3b3b44d9383d127eb66b11ff44ab146a4\&req=dSMvHsp%2FlYJeXfMW1HO4zaqiq0WaEPXeDHzU%2FM9aVyjmJUg63Y%2Fdr6xrFauY%0AZ1V6%0A)](https://downloads.intercomcdn.com/i/o/lnz0cfjq/1388318314/abb4c5a49716ab4fef72dfbca67d/image.png?expires=1753407000\&signature=5ead98c81dd22a71451ae7c71b9351a3b3b44d9383d127eb66b11ff44ab146a4\&req=dSMvHsp%2FlYJeXfMW1HO4zaqiq0WaEPXeDHzU%2FM9aVyjmJUg63Y%2Fdr6xrFauY%0AZ1V6%0A)

    \
    ​
6. Ensure that it has at least View permissions for All Content.
7. Save the changes and try re-indexing.

Optional: Checking Individual Page Restrictions If a specific page is not being indexed, it may have individual Page Restrictions preventing access. Follow these steps:

1. Navigate to the specific page that is not being indexed.
2.  Click the Restrictions padlock icon to open up the page permissions.\
    ​

    [![](https://downloads.intercomcdn.com/i/o/lnz0cfjq/1388316577/639aac5a4c08ec32967ad091550f/image.png?expires=1753407000\&signature=1df687c1a70ffeee25d1973cf9480ba90943096f8e9858a2921e88cd2635a508\&req=dSMvHsp%2Fm4RYXvMW1HO4zcEk0VGGkQfVohJ7%2BI1nJlPFkna1Qtd938aWjPzp%0Aq%2BQP%0A)](https://downloads.intercomcdn.com/i/o/lnz0cfjq/1388316577/639aac5a4c08ec32967ad091550f/image.png?expires=1753407000\&signature=1df687c1a70ffeee25d1973cf9480ba90943096f8e9858a2921e88cd2635a508\&req=dSMvHsp%2Fm4RYXvMW1HO4zcEk0VGGkQfVohJ7%2BI1nJlPFkna1Qtd938aWjPzp%0Aq%2BQP%0A)
3. Ensure that ChatGPT for Confluence / AI for Confluence has View access, or that access is generally open.
4. Save any changes and reattempt indexing.

### 2. The Content is Too Large <a href="#h_9904c5d16f" id="h_9904c5d16f"></a>

Large content pages, especially those with extensive text, tables, or attachments, may not be indexed properly by the AI for Confluence add-on due to processing limitations.

Solution:

* Try breaking down the content into smaller sections or pages.
* If the page contains large attachments, consider moving them to a dedicated storage solution and linking them within the page.
* Reduce excessive formatting, embedded elements, or code blocks that may hinder the indexing process.

### 3. The Content is Not a Direct Child of the Space Homepage <a href="#h_86ccd1f504" id="h_86ccd1f504"></a>

For content to be indexed, it must be a child page of the space homepage. If a page exists outside the hierarchy, the add-on may not recognize it for indexing.

Solution:

1. Navigate to the page that is not being indexed.
2. Click the More Actions (•••) button at the top-right of the page.
3. Select Move and choose the homepage of the space as the new parent page.
4. Save the changes and allow time for re-indexing.

### Additional Troubleshooting Steps <a href="#h_baaab0c84b" id="h_baaab0c84b"></a>

If you have checked the above conditions and content is still not being indexed:

* Ensure the add-on is installed correctly in your Confluence instance.
* Verify that Confluence APIs and integrations are functioning as expected.
* Contact eesel AI support for further assistance.

By following these steps, you should be able to resolve most indexing issues related to AI for Confluence and ensure smooth operation of the add-on within your Confluence workspace.

\
