---
description: Integrate Shopify actions with your AI bot
---

# Shopify

Our Shopify integration involves allowing your bot to access actions to lookup information on your Shopify store.&#x20;

First, [follow the instructions to integrate Shopify.](shopify.md#how-to-integrate-shopify-with-your-ai)&#x20;

Then, [add in Shopify actions and prompt adjustments](shopify.md#shopify-actions) to ensure your bot can utilize the integration.

## How to Integrate Shopify with your AI

Follow the steps below to create and configure the eesel AI Integration app in your Shopify store so you AI can retrieve orders, fulfilment information, products, and more!

{% stepper %}
{% step %}
### &#x20;Access Shopify App Development Settings <a href="#h_7179b4df5c" id="h_7179b4df5c"></a>

* Log in to your Shopify admin dashboard.
*   Navigate to Settings > Apps and Sales Channels.\
    ​

    <div align="left"><figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1367592657/412e72274ee8dbd11a8c68b0cadf/AD_4nXcdxCW79xsj0ynduwe69BHTPbTzJ5gWBQZOH3irGmSKdOIfmS5S5wDUyeRR-oofiTgXMeWT0CyYoXG3oN2Xiumc6kaOAuFA5XgciHH8KOVWODXFc5kZ7rsvEivXyk7ZtJgHN_LrQQ?expires=1753329600&#x26;signature=7278257a670a2be7cfcafe853a55ccf86e650f38583925fb69f068139ef22db6&#x26;req=dSMhEcx3n4daXvMW1HO4zXqg%2BZwkfePVxVEwWyc9Ihjai1WqgoA2Z80XcjBx%0AioSo%0A" alt="" width="563"><figcaption></figcaption></figure></div>
* Click Develop apps at the top of the page.
* If prompted, enable app development.
{% endstep %}

{% step %}
### Create the App <a href="#h_bd8bfd96b7" id="h_bd8bfd96b7"></a>

* Click Create an app.
* Enter eesel AI Integration as the app name.
* Proceed to create the app.
{% endstep %}

{% step %}
### Configure API Credentials <a href="#h_8144ed2012" id="h_8144ed2012"></a>

*   Open the API credentials tab.



    <div align="left"><figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1367592880/df4f0a6eec36a4be96434068a02c/AD_4nXdUkpYQhM78JRKs0k-FixM5PcAH337QivA62FoQ4T7mXs65IkiLnmGhNm_iv9z9nRCPowJUOL4A9F_Yy6ONOnmfX-HrOWGcLHRYypPWNxE1PJeCaVfgMySWset0ZvNMh4KYMim1LQ?expires=1753329600&#x26;signature=7fe4f0e28926ff03805ccdc09dfdeddbbf85a1349978985e9fd1ced9392dbe57&#x26;req=dSMhEcx3n4lXWfMW1HO4zXoSy1K14TN5Au%2BXc001z1aAEdgc9mTcE0ZxZnkr%0A9jOD%0A" alt="" width="563"><figcaption></figcaption></figure></div>
* Click Configure Admin API scopes.
* Select the following read-only permissions:
  * `read_assigned_fulfillment_orders`
  * `read_customers`
  * `read_discounts`
  * `read_fulfillments`
  * `read_orders`
  * `read_payment_terms`
  * `read_products`
  * `read_returns`
  * `read_third_party_fulfillment_orders`
  * `read_custom_fulfillment_services`
* Click Save.
{% endstep %}

{% step %}
### Install the App <a href="#h_ebfcd8d712" id="h_ebfcd8d712"></a>

* Navigate to the Overview tab.
* Click the black Install app button in the top-right corner.
* Confirm the installation.
{% endstep %}

{% step %}
### Retrieve and Share API Credentials <a href="#h_851aca95d6" id="h_851aca95d6"></a>

*   After installation, you will see a masked API credential



    <div align="left"><figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1367593703/420a31b8a565c0e1d8dd461ce859/AD_4nXespadWt5c7H5WWs67a-FbAFjuRyEk7iN7lrvTZ7LCUkzw6sKEYtNvPTNQnztwKOgBNKhPHnIJ9OWQUg0UkiOmgzOZr1O0rCO0NZMc9bSVW_HLyN0mTYtE-Q5KsBbo7biKRvGIlXQ?expires=1753329600&#x26;signature=ffea13bd6325d33ab1652efd598d1a18021c8fe904e5a97aa91e8f312ad31ea0&#x26;req=dSMhEcx3noZfWvMW1HO4zUIfwyCu%2FSDyU3yE%2FC23skI0jd5ANuT%2FMfGsO%2Bp3%0AdwCr%0A" alt="" width="563"><figcaption></figcaption></figure></div>
* Locate the API key field and click to reveal the token.
{% endstep %}

{% step %}
### Add the credentials to a new action in the eesel dashboard <a href="#h_1369096c0b" id="h_1369096c0b"></a>

* Open up the [eesel dashboard](https://dashboard.eesel.ai/v2)
* Go to "Customize" in the sidebar
*   Click "Create new action", you'll see the following



    <div align="left"><figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1419950042/ceaf63447a0ec5dd261682ab0d97/image.png?expires=1753329600&#x26;signature=517cb8829101034233b50ece14731ed50fab7aa860698b97b06ba6a6e12b9491&#x26;req=dSQmH8B7nYFbW%2FMW1HO4zSPms77doStBHsDCY6iS%2Bl%2BFN6AUt27GaWtS%2BWUc%0APJtD%0A" alt="" width="563"><figcaption></figcaption></figure></div>
* Choose "Shopify" from the sidebar to see the list of Shopify actions available
* Select an action, then type in the shop name (not the URL!) and access token. The shop name will be the first part of the URL, for example if the URL is "eesel-ai.myshopify.com", the shop name will be "eesel-ai".

<div align="center"><figure><img src="https://downloads.intercomcdn.com/i/o/lnz0cfjq/1419951025/227bf1dec249d2d58dfd85a93897/image.png?expires=1753329600&#x26;signature=6edf20e59ef79c9f00809e17956fc8600fa8695c16123845988ee93c62bc2f9a&#x26;req=dSQmH8B7nIFdXPMW1HO4zZu7E2%2FvvIM6J27tIwwYJ2csL5DbNziljxcc4J15%0AcovO%0A" alt="" width="563"><figcaption></figcaption></figure></div>
{% endstep %}
{% endstepper %}

## Shopify Actions

<details>

<summary>Get order by ID</summary>

`shopify_get_order_by_id`

* **Purpose:** Fetch details for a specific Shopify order.
* **Key Params:** `order_id: str`
* **When/How to Use:** Use when a user asks about the status or details of a specific order and provides an order number or ID. Instruct the AI to ask for the order ID if the user's query requires it but isn't provided initially.
*   **Example Prompt Instruction:**

    > If the user is asking about the status or location of their order, you must ask them for their order number. Once the user provides an order number, you must call shopify\_get\_order\_by\_id with the provided order\_id as the parameter. Use the information returned by the tool to answer the user's question about their order.

</details>

<details>

<summary>Get customer by email</summary>

`shopify_get_customer_by_email`

* **Purpose:** Look up a Shopify customer by their email address.
* **Key Params:** `email: str`
* **When/How to Use:** Use when a user asks about their account, order history, or general customer information and provides their email address. Instruct the AI to request the email if needed.
*   **Example Prompt Instruction:**

    > If the user is asking about their customer account or looking for information related to orders associated with their account but has not provided an order number, you must ask for the email address associated with their account for verification. Once the user provides their email address, you must call shopify\_get\_customer\_by\_email with the provided email. Use the information returned to help the user with their account-related query.

</details>
