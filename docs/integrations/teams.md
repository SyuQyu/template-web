---
description: Chat with the bot in Teams and train it on conversations
---

# Teams

<figure><img src="../.gitbook/assets/Teams Integration Asset (1).png" alt=""><figcaption></figcaption></figure>

Train the bot on your apps and documentation, and chat with it in Teams like a teammate. Great for onboarding, sourcing docs from scattered platforms, and streamlining internal processes.&#x20;

{% stepper %}
{% step %}
## Download & Install the app

* Download the eesel.zip file provided below.&#x20;
* Go to[ https://admin.teams.microsoft.com/policies/manage-apps](https://admin.teams.microsoft.com/policies/manage-apps).
* Click on Actions > Upload new app in the top right corner.
* Upload the Eesel application zip file that you downloaded.

{% file src="../.gitbook/assets/eesel.zip" %}
{% endstep %}

{% step %}
## Enable the App

* Open Microsoft Teams.
* In the left sidebar, click on Apps.
* Use the search bar to find the custom app (e.g., eesel).
* Click on the app from the search results.
* Select Add or Open to install it (if not already installed).
* Select the channels you'd like eesel to be active in. eesel can be invoked by using "@eesel" in your message.
{% endstep %}

{% step %}
## Add your Tenant ID

* Begin by clicking on the three dots, or the ‘More options’ menu, located next to any team or channel in Microsoft Teams.
* A dropdown menu will appear upon clicking the three dots menu. Find and select the “Copy Link to Channel” option from this list.
* Next paste the link into a text editor of your choice into eesel. We will extract the tenantId. Don't worry we will not access teams, this is just a link, we don't get access to your teams account.
{% endstep %}

{% step %}
## Success!

The app has been added to your organization. You can now tag eesel in conversations using @eesel or search for eesel in the user list to start a direct chat.
{% endstep %}
{% endstepper %}
