---
description: AI agents and copilot to streamline support
---

# Jira Service Management

eesel AI instantly plugs into your Gorgias, learns from your past tickets, macros, help center and more, and seamlessly joins in like a new teammate.

***

## Training your AI with JSM

{% tabs %}
{% tab title="Help Center" %}
### Help Center

Jira Service Management help centers are typically managed via Confluence. Our AI can automatically pull in help center from your Confluence space.

Check out our [Confluence integration](confluence/) for more information.
{% endtab %}

{% tab title="Canned Replies" %}
### Canned Replies

When you connect your JSM domain to your eesel AI bot, it will automatically index your canned replies and add them to your AI bot.

1. Go to your eesel dashboard and unfurl the JSM integration on the left sidebar
2. Click Sources
3. Click Canned Replies
4. Set them live or as drafts to enable or disable them.
5. Click re-sync to update them after any changes in JSM.

**Note:** if your canned replies haven't been added, reach out to support.
{% endtab %}

{% tab title="Past Issues" %}
### Past Issues

Training on past issues requires you to connect your Jira to the bot you want to train. Once that's done, click on your Jira integration on the left sidebar > Click 'Sources' > 'Issues'.&#x20;

We recommend filtering your tickets using the query in order to get the best quality results.

### Writing an Issue Filter Query

Read more about it in [JSM's official documentation](https://support.atlassian.com/jira-service-management-cloud/docs/what-is-advanced-search-in-jira-cloud/).
{% endtab %}
{% endtabs %}

***

### Create a JSM AI Agent <a href="#create-a-gorgias-ai-agent" id="create-a-gorgias-ai-agent"></a>

<figure><img src="../.gitbook/assets/Gorgias AI Agent.png" alt=""><figcaption></figcaption></figure>

eesel can automate your frontline support as an AI agent inside JSM. You can have it leave internal notes, automatically reply, and triage tickets. Once your AI has been trained and customized, it's time to link your JSM domain to your AI bot. To set up eesel as an AI agent inside JSM, see our [AI Agent guide](https://app.gitbook.com/o/sVsbanNFtsZq7FAyg0Do/s/UZKi9A4XwKvuOPgMvVMe/products/ai-agent).​

***

### Create a JSM AI Copilot <a href="#create-a-gorgias-ai-copilot" id="create-a-gorgias-ai-copilot"></a>

<figure><img src="../.gitbook/assets/Gorgias copilot.png" alt=""><figcaption></figcaption></figure>

Check out our [setup guide](https://app.gitbook.com/o/sVsbanNFtsZq7FAyg0Do/s/UZKi9A4XwKvuOPgMvVMe/products/ai-copilot) for using AI Copilot in your JSM. eesel AI can act as an AI copilot for your JSM by using our [browser extension](https://chromewebstore.google.com/detail/eesel-ai-chatgpt-sidebar/ejhkkbilnpifailgngpkgmiofhioacjd?hl=en).&#x20;

The AI can automatically pick up on the content of a ticket, and generate a response based on the knowledge it has access to.&#x20;

You can use the browser extension to select the bot you want to use for its answer, and then draft a response and chat with the bot to edit before you paste is as a reply.

***

### JSM Actions <a href="#gorgias-actions" id="gorgias-actions"></a>

Once you've trained the bot and integrated it with JSM, it's important to customize it and add actions so that you can get the most out of your AI and automate manual tasks. The following are JSM specific actions. You can use them in combination with other actions on different platforms as well.

<details>

<summary>Create issue</summary>

`jira_create_issue`

* **Purpose:** File a Jira issue.
* **Key Params:** `project_key, summary, description`
* **When/How to Use:** Primarily used for reporting bugs or suggesting improvements that need engineering or product team attention tracked in Jira. You must instruct the AI to identify these scenarios and gather the necessary information. Define the default `project_key` to use.
*   **Example Prompt Instruction:**

    > If you are unable to help the user with their enquiry OR it appears that they are reporting a bug or suggesting a product improvement, you must offer to create an issue for the user in our engineering tracking system (Jira). If they accept, collect a brief summary of the issue and a more detailed description. Then, call jira\_create\_issue with project\_key set to 'ENG', using the collected information for the summary and description parameters.

</details>

<details>

<summary>Label issue</summary>

`jira_label_issue`

* **Purpose:** Adds labels to a Jira issue.
* **Key Params:** `issue_key: str, labels: List[str]`
* **When/How to Use:** Use this after a Jira issue has been created or identified (e.g., using `jira_create_issue` or `jira_search_issue`) to add relevant labels for categorization and filtering within Jira. You need the issue key and the list of labels.
*   **Example Prompt Instruction:**

    > After successfully creating a Jira issue using jira\_create\_issue (and obtaining the issue key from the tool's response), analyze the user's report for key topics (e.g., 'login', 'performance'). Call jira\_label\_issue using the new issue\_key and a list of relevant labels, e.g., labels=\['bug', 'reported-by-customer', 'severity-medium'].

</details>

<details>

<summary>Search issue</summary>

`jira_search_issue`

* **Purpose:** Searches for Jira issues using JQL.
* **Key Params:** `jql: str`
* **When/How to Use:** Use this when a user asks about the status of a known bug, feature request, or project item that is tracked in Jira. You must formulate a JQL query string based on the user's keywords or the issue they are referencing.
*   **Example Prompt Instruction:**

    > If the user asks about the status of a bug they previously reported, or asks if a known issue is fixed (and mentions keywords related to it), formulate a JQL query to search for the issue in Jira. Call jira\_search\_issue with the parameter jql='summary \~ "\[Keywords from user query]" AND project = ENG ORDER BY created DESC'. Present the search results to the user, focusing on the issue key, summary, and status.

</details>

<details>

<summary>Assign issue (escalation)</summary>

`jira_assign_issue`

* **Purpose:** Assigns an existing issue in Jira to a specific user.
* **Key Params:** `issue_key: str, assignee_account_id: str`
* **When/How to Use:** Use this to assign an existing Jira issue (identified by its key) to a specific team member or group within Jira, using their Jira account ID. This is useful for routing issues found via search or created by the AI to the correct owner.
*   **Example Prompt Instruction:**

    > If the user is reporting a front-end issue and you have found or created the relevant Jira ticket (issue key available), you should assign it to the front-end lead. Call jira\_assign\_issue with the issue\_key and the parameter assignee\_account\_id='\[Front-end Lead Jira Account ID]'.

</details>

<details>

<summary>Comment on issue</summary>

`jira_comment_on_issue`

* **Purpose:** Adds a comment to an existing issue in Jira.
* **Key Params:** `issue_key: str, comment: str`
* **When/How to Use:** Use this to add context from the customer conversation directly to the related Jira issue. This is useful for providing engineers with additional details, clarifying user impact, or adding follow-up information. You need the issue key and the content of the comment.
*   **Example Prompt Instruction:**

    > If a user provides important additional details or context about a bug or feature request after the Jira issue has been created, call jira\_comment\_on\_issue using the relevant issue\_key. Set the comment parameter to summarize the new information provided by the user.

</details>

***

## FAQ

<details>

<summary>Connect Jira to eesel AI</summary>

To connect your Jira account to eesel , you’ll need to generate an API token and provide a few details. Follow the steps below:

### 1. Generate an API Token <a href="#h_ffaab8874d" id="h_ffaab8874d"></a>

Visit [this link](https://id.atlassian.com/manage-profile/security/api-tokens) to generate a new API token in your Atlassian account.

### 2. Create and Copy the Token <a href="#h_be58510539" id="h_be58510539"></a>

Click "Create API Token", give your token a recognizable name, and click "Create".\
Then, copy the generated token to your clipboard — you’ll need it in a later step.

### 3. Find Your Jira Subdomain <a href="#h_344dfcb73e" id="h_344dfcb73e"></a>

Locate your Jira site URL. It will look something like `yourcompany.atlassian.net`. Where `yourcompany` is your subdomain.

### 4. Enter Your Jira Email <a href="#h_27a067b242" id="h_27a067b242"></a>

Use the email address associated with your Jira account.

### 5. Paste the API Token <a href="#h_e26feef1fb" id="h_e26feef1fb"></a>

Paste the API token you copied earlier into the relevant field.

### 6. Connect <a href="#h_e4638fc080" id="h_e4638fc080"></a>

Click "Connect Jira" to finalize the setup.

### Want a Full AI Agent Embedded in Jira? <a href="#h_1461056a6a" id="h_1461056a6a"></a>

If you'd like a full AI agent embedded directly inside your Jira or JSM project, install the [AI for Jira Cloud](https://marketplace.atlassian.com/apps/1232959/ai-for-jira-cloud) app from the Atlassian Marketplace:

</details>
