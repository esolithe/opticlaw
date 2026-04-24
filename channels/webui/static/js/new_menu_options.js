// =============================================================================
// Agent Menu Options
// =============================================================================

// Defines metadata for agent-related configuration options.
// Loaded after modal_settings.js to extend FIELD_DESCRIPTIONS.
const AGENT_MENU_OPTIONS = [
    {
        key: 'model.agent_replan_on_error',
        label: 'Replan on error',
        description: 'When enabled, the agent will restart its planning loop when a tool call returns an error, prompting it to try a different strategy instead of continuing with a failed result.',
        type: 'boolean',
        default: false
    }
];

// Extend field descriptions for agent options so they appear in the settings UI
for (const option of AGENT_MENU_OPTIONS) {
    if (option.description) {
        FIELD_DESCRIPTIONS[option.key] = option.description;
    }
}
