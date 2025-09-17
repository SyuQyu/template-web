---
description: AI agents and copilot to streamline support
---

# Intercom

<figure><img src="../.gitbook/assets/Intercom Integration Asset - Revised.png" alt=""><figcaption></figcaption></figure>

eesel AI instantly plugs into your Intercom, learns from your past tickets, macros, help center and more, and seamlessly joins in like a new teammate.

***

## Training your AI with Intercom

{% tabs %}
{% tab title="Help Center" %}
### Help Center

For **public help centers**:

1. Choose the bot, or create a new bot, to connect with your help center.&#x20;
2. Click the integrations menu on the sidebar.&#x20;
3. Click Intercom.
4. Click "Setup integration".
5. Enter you help center URL and click "Start crawling"

The bot will then crawl your help center and start adding links to your bot to use as knowledge within minutes.&#x20;
{% endtab %}

{% tab title="Macros" %}
### Macros

When you connect your Intercom domain to your eesel AI bot, it will automatically index your macros and add them to your AI bot.

1. Go to your eesel dashboard and unfurl the Intercom integration on the left sidebar
2. Click Sources
3. Click Macros&#x20;
4. Set them live or as drafts to enable or disable them.
5. Click re-sync to update them after any changes in Intercom.
{% endtab %}

{% tab title="Past Conversations" %}
{% hint style="warning" %}
Currently not available as a self-serve option. Please contact support with the following form.
{% endhint %}

### Request Form

**Note:** All bots you want trained with conversations must be connected with Intercom.

Please ensure that the values and responses you enter are exact matches.

1. What platform are your conversations located on?
2. Which bot would you like to train with these conversations?\
   &#x200B;_(Please copy and paste the bot URL here in addition to the name of the bot)_
3. What date range would you like us to pull the conversations from?\
   &#x200B;_(e.g., past three months of conversations)_
4. Other conversation details, if applicable:
   * Teammate ID or email
   * Team ID or name
   * Attributes/custom attributes (please specify all details)
   * Workspace
5. If you want different sets of conversation training added to different bots, please explain which conversations should map to which bots.
{% endtab %}

{% tab title="Restricted Help Center" %}
### **Restricted Help Center**

1. Install our browser extension
2. Open up the tabs you want to train the AI with
3. Click 'Add sources' > 'Add all tabs in browser'.&#x20;

**On a paid plan**, reach out to us through support and we can automatically crawl and update your restricted help center.
{% endtab %}
{% endtabs %}

***

## Create a Intercom AI Agent

<figure><img src="../.gitbook/assets/Intercom Agent.png" alt=""><figcaption></figcaption></figure>

eesel can automate your frontline support as an AI agent inside Intercom. You can have it leave internal notes, automatically reply, and triage tickets.

Once your AI has been trained and customized, it's time to link your Intercom domain to your AI bot.

To set up eesel as an AI agent inside Intercom, see our [AI Agent guide](../products/ai-agent.md).



***

## Create a Intercom AI Copilot

<figure><img src="../.gitbook/assets/Intercom Copilot.png" alt=""><figcaption></figcaption></figure>

Check out our [setup guide](../products/ai-copilot.md) for using AI Copilot in your Intercom.

eesel AI can act as an AI copilot for your Intercom by using our [browser extension](https://chromewebstore.google.com/detail/eesel-ai-chatgpt-sidebar/ejhkkbilnpifailgngpkgmiofhioacjd?hl=en).&#x20;

The AI can automatically pick up on the content of a ticket, and generate a response based on the knowledge it has access to.

You can use the browser extension to select the bot you want to use for its answer, and then draft a response and chat with the bot to edit before you paste is as a reply.

***

## Intercom Actions

Once you've trained the bot and integrated it with your Intercom, it's important to customize it and add actions so that you can get the most out of your AI and automate manual tasks.

The following are Intercom specific actions. You can use them in combination with other actions on different platforms as well.

<details>

<summary>Tag conversation</summary>

`intercom_tag_conversation`

* **Purpose:** Add tags to an Intercom conversation.
* **Key Params:** `tag: str`
* **When/How to Use:** Similar to `zendesk_tag_ticket`. Use for categorization, reporting, or triggering workflows based on conversation topics. Note that this tool takes a single string `tag`. The conversation ID is automatically available.
*   **Example Prompt Instruction:**

    > Upon successfully answering a user's question about feature usage, you must call intercom\_tag\_conversation. Set the tag parameter to 'feature-inquiry'. If the user was asking about a known issue, make a separate call to intercom\_tag\_conversation with the tag 'known-issue'.

</details>

<details>

<summary>Close conversation</summary>

`intercom_close_conversation`

* **Purpose:** Close an Intercom thread after a short delay (\~30 seconds).
* **Key Params:** — (No explicit parameters)
* **When/How to Use:** Similar to `zendesk_close_ticket`. Use when the conversation is resolved and no further action is needed. The approximately 30-second delay is built-in. The conversation ID is automatically available.
*   **Example Prompt Instruction:**

    > If the user confirms their issue is resolved and expresses satisfaction, or if the conversation has been inactive for several minutes after you provided a solution, you must call intercom\_close\_conversation to close the thread after the standard delay.

</details>

<details>

<summary>Leave internal note</summary>

`intercom_leave_internal_note`

* **Purpose:** Leaves an internal note on the ticket.
* **Key Params:** `note: str`
* **When/How to Use:** Use this action to leave internal notes on conversations in Intercom. Describe what you want the internal note to be - this could be a draft reply for your agents to pick up, a translation of the user message and so on.
*   **Example Prompt Instruction:**

    > If you escalate a conversation to a human agent, or if you need to summarize the AI's actions for the next agent, call intercom\_leave\_internal\_note. The note parameter should contain the summary. For urgent escalations that need specific attention, you can also include notify\_emails=\['agent1@example.com', 'manager@example.com'] to alert specific team members.

</details>

<details>

<summary>Assign conversation (escalation)</summary>

`intercom_assign_conversation`

* **Purpose:** Assign an Intercom conversation to a specific team or admin.
* **Key Params:** `assignee_id: str`
* **When/How to Use:** Similar to `zendesk_assign_ticket`. Use this for routing conversations that require human follow-up or expertise from a specific team. Define how the AI determines the appropriate `assignee_id`. This parameter requires the Intercom ID for the admin or team, not an email address. The conversation ID is automatically available.
*   **Example Prompt Instruction:**

    > If the user asks a question about their billing history or requires an action related to their subscription, you must inform them you are escalating their request to the billing team and call intercom\_assign\_conversation. Set the assignee\_id parameter to the specific Intercom ID for your 'Billing Team' inbox or a specific billing specialist admin.

</details>

<details>

<summary>Get ticket fields</summary>

`Intercom_get_ticket_fields`

* **Purpose:** Retrieves specified fields from an Intercom ticket.
* **Key Params:** `fields: str` (comma-separated)
* **When/How to Use:** Use this when you need specific information from the current ticket (e.g., its current status, assignee, or a custom field value) to inform your next action or response. You must specify the field names (standard or custom field IDs as strings) you need. The ticket ID is automatically available.
*   **Example Prompt Instruction:**

    > Before escalating a ticket, you should check its current status and assignee. Call intercom\_get\_ticket\_fields with the parameter fields='status,assignee\_id'. Use the results to inform the user about the current state or to decide who to assign it to next.
    >
    > If a user's query depends on a custom field (ID 456), call `intercom_get_ticket_fields` with `fields='456'`.

</details>

<details>

<summary>Get conversation fields</summary>

`Intercom_get_conversation_fields`

* **Purpose:** Retrieves specified fields from an Intercom ticket.
* **Key Params:** `fields: str` (comma-separated)
* **When/How to Use:** Use this when you need specific information from the current conversation (e.g., its current status, assignee, or a custom field value) to inform your next action or response. You must specify the field names (standard or custom field IDs as strings) you need. The conversation ID is automatically available.
*   **Example Prompt Instruction:**

    > Before escalating a conversation, you should check its current status and assignee. Call intercom\_get\_conversation\_fields with the parameter fields='status,assignee\_id'. Use the results to inform the user about the current state or to decide who to assign it to next.
    >
    > If a user's query depends on a custom field (ID 456), call `intercom_get_conversation_fields` with `fields='456'`.

</details>

<details>

<summary>Un-assign conversation</summary>

`Intercom_unassign_conversation`

* **Purpose:** Use this action to unassign conversations in Intercom.&#x20;
* **Key Params:**&#x20;
* **When/How to Use:** Simply describe when you want the conversation unassigned, and the AI will handle this. This is useful for removing an assignee from a conversation, making it available for others to pick up.
*   **Example Prompt Instruction:**

    >

</details>

<details>

<summary>User lookup</summary>

`Intercom_get_conversation_fields`

* **Purpose:** Allow your bot to look up a Intercom user using their email address.
* **Key Params:**
* **When/How to Use:**&#x20;
*   **Example Prompt Instruction:**

    >

</details>

<details>

<summary>Update conversation</summary>

`Intercom_update_conversation`

* **Purpose:** Use this action to update a conversation in Intercom.
* **Key Params:**&#x20;
* **When/How to Use:** Define the conditions and details you want to change (such as status, priority, or assignee), and the AI will automatically update the conversation accordingly.
*   **Example Prompt Instruction:**

    > If the user indicates their issue is resolved and you have confirmed it, or if the workflow requires setting the ticket status to 'solved', you must call intercom\_update\_conversation. Set the payload parameter to a JSON string that updates the status, e.g., payload='{"status": "solved"}'.
    >
    > If the user reports a high-priority issue you are escalating, you might call `intercom_update_ticket` with `payload='{"priority": "high"}'`.
    >
    > To update a custom field (ID 123), call `intercom_update_ticket` with `payload='{"custom_fields": [{"id": 123, "value": "new value"}]}'`.

</details>
