---
description: AI agents and copilot to streamline support
---

# Zendesk

eesel AI instantly plugs into your Zendesk, learns from your past tickets, macros, help center and more, and seamlessly joins in like a new teammate.

***

## Training your AI with Zendesk

{% tabs %}
{% tab title="Help Center" %}
### Help Center

For **public help centers**:

1. Choose the bot, or create a new bot, to connect with your help center.&#x20;
2. Click the integrations menu on the sidebar.&#x20;
3. Click Zendesk.
4. Click "Setup integration".
5. Enter you help center URL and click "Start crawling"

The bot will then crawl your help center and start adding links to your bot to use as knowledge within minutes.&#x20;
{% endtab %}

{% tab title="Macros" %}
### Macros

When you connect your Zendesk domain to your eesel AI bot, it will automatically index your macros and ad them to your AI bot.

1. Go to your eesel dashboard and unfurl the Zendesk integration on the left sidebar
2. Click Sources
3. Click Macros&#x20;
4. Set them live or as drafts to enable or disable them.
5. Click re-sync to update them after any changes in Zendesk.
{% endtab %}

{% tab title="Past Tickets" %}
### Past Tickets

Training on past tickets requires you to connect your Zendesk domain to the bot you want to train. Once that's done, click on your Zendesk integration on the left sidebar > Click 'Sources' > 'Past Tickets'.&#x20;

We recommend filtering your tickets using the query in order to get the best quality results.

### Writing a Ticket Filter Query <a href="#h_6778e3d5d6" id="h_6778e3d5d6"></a>

Read more about it in [Zendesk's official documentation](https://support.zendesk.com/hc/en-us/articles/4408886879258-Zendesk-Support-search-reference).
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

## Create a Zendesk AI Agent

<figure><img src="../../.gitbook/assets/AI Agent Asset zendesk.png" alt=""><figcaption></figcaption></figure>

To set up eesel as an AI agent inside Zendesk, see our [AI Agent guide](../../products/ai-agent.md).

eesel AI, once connected to your Zendesk domain, acts as an agent inside Zendesk. It will operate as a "web hook" in your triggers.&#x20;

If you want to alter what tickets it responds to, we recommend cloning your trigger and editing the conditions there to achieve the desired result.&#x20;

eesel will 'appear' in Zendesk as the user who has added/authorized it initially. To change who eesel appears as, or to use a new agent ID specifically for the bot, you can add in the user ID in the AI Agent tab of the Zendesk integration in the eesel dash.

***

## Create a Zendesk AI Copilot

<figure><img src="../../.gitbook/assets/AI_Copilot_Asset_5 1.png" alt=""><figcaption></figcaption></figure>

Check out our [setup guide](../../products/ai-copilot.md) for using AI Copilot in your Zendesk.

eesel AI can act as an AI copilot for your Zendesk by using our [browser extension](https://chromewebstore.google.com/detail/eesel-ai-chatgpt-sidebar/ejhkkbilnpifailgngpkgmiofhioacjd?hl=en).&#x20;

The AI can automatically pick up on the content of a ticket, and generate a response based on the knowledge it has access to.

You can use the browser extension to select the bot you want to use for its answer, and then draft a response and chat with the bot to edit before you paste is as a reply.

***

## Zendesk Messaging Widget Integration

eesel AI can operate inside your existing Zendesk Messaging Widget. It will be able to operate inside the widget without changing the widget itself in any way.&#x20;

To do so, you must be on a paid Business Plan. You must also have access to Conversations APIs.&#x20;

Once you have the above ^ you can then:

1. Click open the Zendesk integration menu on the left sidebar
2. Click AI Agent
3. Click AI Agents for messaging
4. Click "Configure API keys", and input the field values you get after creating a new API in Conversations API in your Zendesk.
5. Once configured, you should be able to follow the prompts to set up your configuration in eesel.&#x20;

For more advanced information about the Zendesk messaging widget, [go here](./#zendesk-messaging-widget-integration).



***

## Zendesk Actions

Once you've trained the bot and integrated it with your Zendesk, it's important to customize it and add actions so that you can get the most out of your AI and automate manual tasks.

The following are Zendesk specific actions. You can use them in combination with other actions on different platforms as well.

<details>

<summary>Close ticket</summary>

`zendesk_close_ticket`

* **Purpose:** Close a Zendesk ticket.
* **Key Params:** `close: true`
* **When/How to Use:** Use this tool when the user explicitly indicates their issue is resolved, they are satisfied with the assistance, or the conversation reaches a natural conclusion where closure is appropriate according to your support process. The ticket ID for the current conversation is automatically available to the tool.
*   **Example Prompt Instruction:**

    > If the user explicitly states their problem is solved, they are satisfied with the outcome, or the conversation has concluded and no further action is required, you must confirm this understanding with the user. If they agree, call the zendesk\_close\_ticket tool to mark the ticket as closed.

</details>

<details>

<summary>Leave internal note</summary>

`zendesk_leave_internal_note`

* **Purpose:** Add a private internal note to a Zendesk ticket.
* **Key Params:** `note: str`
* **When/How to Use:** Use this tool to add context, summarize the AI's interaction, or flag important information for a human agent who might review the ticket later. This note is not visible to the end-user. Use this when the AI performs an action (like escalating) or when the conversation contains nuances a human agent should be aware of. The ticket ID is automatically available.
*   **Example Prompt Instruction:**

    > If you escalate a conversation to a human agent, or if you are unable to fully resolve the user's query but have provided some assistance, you must call zendesk\_leave\_internal\_note. The note parameter should be a brief summary of the user's request and the steps you took or information you provided before the handover.

</details>

<details>

<summary>Tag ticket</summary>

`zendesk_tag_ticket`

* **Purpose:** Add tags to a Zendesk ticket for categorization and workflow automation.

- **Key Params:** `tag: str` (space-separated)

* **When/How to Use:** Use this tool when the conversation's topic or resolution falls into specific categories you use for reporting, routing, or automation. Instruct the AI to identify keywords or themes in the conversation to determine the appropriate tags. If applying multiple tags in one call, list them space-separated in the `tag` parameter string. The ticket ID is automatically available.

-   **Example Prompt Instruction:**

    > After assisting the user, analyze the conversation's main topic and the resolution. If the user's request was related to 'billing', 'shipping', or 'product support', you must call zendesk\_tag\_ticket. The tag parameter should be the relevant tag (e.g., 'billing', 'shipping', 'product-support'). If the issue was successfully resolved by you, also add the tag 'ai-resolved'. If both apply, use space-separated tags like 'shipping ai-resolved'.

</details>

<details>

<summary>Assign ticket (escalation)</summary>

`zendesk_assign_ticket`

* **Key Params:** `new_assignee: str`

- **When/How to Use:** Use this tool when the query requires human expertise that the AI cannot provide, or when the conversation needs to be routed to a specific team (represented by an assignee). You will need to define how the AI identifies the correct `new_assignee` identifier (which is typically an ID or a precisely matched name depending on your Zendesk setup and the tool's exact implementation, but is not an email address). The ticket ID is automatically available.

*   **Example Prompt Instruction:**

    > If the user's request involves a complex technical issue you cannot resolve, or if the user specifically asks to speak with a human agent, you must inform the user you are escalating the issue and then call zendesk\_assign\_ticket. Set the new\_assignee parameter to the specific ID or identifier for your 'Technical Support Team' group.

</details>

<details>

<summary>Chat handover (Zendesk messenger)</summary>

`zendesk_chat_handover`

* **Purpose:** Handover a Zendesk Messenger chat to a human agent.
* **Key Params:** — (No explicit parameters)
* **When/How to Use:** This is specifically for chat interactions. Use this when the AI determines it cannot resolve the user's query in a chat format and human intervention is required immediately.
*   **Example Prompt Instruction:**

    > In a chat conversation, if the user's query is unclear, requires account-specific actions you cannot perform, or the user explicitly asks to chat with a human, you must inform the user that you are connecting them with an agent and then call the zendesk\_chat\_handover tool.

</details>

<details>

<summary>Update ticket</summary>

`zendesk_update_ticket`

* **Purpose:** Updates a Zendesk ticket with the provided payload.
* **Key Params:** `payload: str` (JSON string)
* **When/How to Use:** Use this for modifying various ticket fields (status, priority, custom fields, etc.). The ticket ID for the current conversation is automatically available. You must instruct the AI to construct the JSON payload based on the desired updates indicated by the user or the workflow logic.
*   **Example Prompt Instruction:**

    > If the user indicates their issue is resolved and you have confirmed it, or if the workflow requires setting the ticket status to 'solved', you must call zendesk\_update\_ticket. Set the payload parameter to a JSON string that updates the status, e.g., payload='{"status": "solved"}'.
    >
    > If the user reports a high-priority issue you are escalating, you might call `zendesk_update_ticket` with `payload='{"priority": "high"}'`.
    >
    > To update a custom field (ID 123), call `zendesk_update_ticket` with `payload='{"custom_fields": [{"id": 123, "value": "new value"}]}'`.

</details>

<details>

<summary>Get ticket fields</summary>

`zendesk_get_ticket_fields`

* **Purpose:** Retrieves specified fields from a Zendesk ticket.
* **Key Params:** `fields: str` (comma-separated)
* **When/How to Use:** Use this when you need specific information from the current ticket (e.g., its current status, assignee, or a custom field value) to inform your next action or response. You must specify the field names (standard or custom field IDs as strings) you need. The ticket ID is automatically available.
*   **Example Prompt Instruction:**

    > Before escalating a ticket, you should check its current status and assignee. Call zendesk\_get\_ticket\_fields with the parameter fields='status,assignee\_id'. Use the results to inform the user about the current state or to decide who to assign it to next.
    >
    > If a user's query depends on a custom field (ID 456), call `zendesk_get_ticket_fields` with `fields='456'`.

</details>

<details>

<summary>Create ticket</summary>

`zendesk_create_ticket`

* **Purpose:** Creates a new ticket in Zendesk.
* **Key Params:** `summary: str, name: str, email: str`, optional `tags: List[str]`, optional `group_id: int`, optional `assignee_id: int`
* **When/How to Use:** Use when a user's request warrants creating a new, separate ticket, such as a new inquiry identified within an existing conversation, or a request received via a non-ticket channel that needs formal tracking. You must gather the `summary`, `name`, and `email` of the requester. Optional parameters like `tags`, `group_id`, or `assignee_id` can be set based on workflow rules or user input.
*   **Example Prompt Instruction:**

    > If a user asks a new question that is unrelated to the current conversation's topic, offer to create a new ticket for that specific question. If they agree, collect a brief summary of the new question, the user's name, and email address. Call zendesk\_create\_ticket with the collected summary, name (from user context), and email (from user context). Add a tag like tags=\['new\_inquiry'] or specify an group\_id if needed.

</details>

***

## FAQs

<details>

<summary>How do I set up the AI as a unique user in my Zendesk?</summary>

If you need to change the user that Eesel AI uses to send replies and updates inside Zendesk, follow these steps:

### Step 1: Create a New User in Zendesk <a href="#h_4f5966826d" id="h_4f5966826d"></a>

1. Log into your Zendesk account.
2. Navigate to Admin Center > People > Agents
3. Click Add user and enter the necessary details (name, email, role).
4. Save the user.

### Step 2: Find the User ID <a href="#h_baab0a3db3" id="h_baab0a3db3"></a>

The User ID is a unique identifier required for Eesel AI. To find it:

1. In Zendesk, go to Admin Center > People > Search Users and find the newly created user.
2. Click on the user’s name to open their profile.
3.  Look at the URL in your browser’s address bar—it will be in the format:

    ```
    https://yourcompany.zendesk.com/agent/users/123456789
    ```
4. The number at the end (e.g., `123456789`) is the User ID. Copy this.

### Step 3: Update Eesel AI’s Response Settings <a href="#h_d6eb7fbbe4" id="h_d6eb7fbbe4"></a>

1. Log into Eesel AI.
2. In the sidebar, navigate to Zendesk > AI Agent.
3. Find the field titled "What user should the bot respond as?"
4. Paste the copied User ID into this field.
5. Save the changes.

Eesel AI will now send replies and updates as the selected user inside Zendesk.

</details>

