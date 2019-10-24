module.exports = {
  1: {
    id: 1,
    name: 'Media Plan',
    steps: [{
      prompt: 'Which client is this media plan for?',
      input: {
        variable: 'Client'
      }
    }, {
      prompt: 'What is the total budget you are planning?',
      input: {
        variable: 'TotalBudget',
      }
    }, {
      prompt: 'What is the name of this campaign?',
      input: {
        variable: 'CampaignName'
      }
    }, {
      prompt: 'What is the start date for this campaign?',
      input: {
        variable: 'CampaignStart'
      }
    }, {
      prompt: 'What is the overall goal of the campaign?',
      input: {
        variable: 'CampaignGoal'
      }
    }, {
      prompt: 'OK, let\'s start the Awareness stage planning.',
    }, {
      prompt: 'How much money do you want to allocate to this funnel stage?',
      input: {
        variable: 'Awareness_Allocation'
      }
    }, {
      prompt: 'What is the first channel you want to leverage in this stage?',
      input: {
        variable: 'Awareness_Channel1'
      }
    }, {
      prompt: 'How much money do you want to allocate to "{{Awareness_Channel1}}"?',
      input: {
        variable: 'Awareness_Channel1_Allocation'
      }
    }, {
      prompt: 'Why does this channel make good strategic sense for the Awareness phase of this campaign?',
      input: {
        variable: 'Awareness_Channel1_Reasons'
      }
    }, {
      prompt: 'What creative assets do you want to leverage for this channel?',
      input: {
        variable: 'Awareness_Channel1_Assets',
        default: [
          'Image',
          'Video',
          'Carousel or Slideshow',
          'Other'
        ]
      }
    }, {
      prompt: 'How many creative assets do you recommend for this channel?',
      input: {
        variable: 'Awareness_Channel1_Count'
      }
    }, {
      prompt: 'Detail any A/B tests you aim to run on this channel.',
      input: {
        variable: 'Awareness_Channel1_Tests'
      }
    }, {
      prompt: 'How will you be billed on this "{{Awareness_Channel1}}"?',
      input: {
        variable: 'Awareness_Channel1_Billed',
        default: [
          'Flat Fee',
          'CPM',
          'CPC',
          'CPE',
          'Other'
        ]
      }
    }, {
      prompt: 'What are the KPIs you intend to capture and measure for this "{{Awareness_Channel1}}"?',
      input: {
        variable: 'Awareness_Channel1_KPIs'
      }
    }, {
      prompt: 'If there are any seasonal, holiday, or event-based considerations for this channel, please detail them here.',
      input: {
        variable: 'Awareness_Channel1_Events'
      }
    }, {
      prompt: 'Name your first audience for this channel.',
      input: {
        variable: 'Awareness_Channel1_Audience1'
      }
    }, {
      prompt: 'Detail the make up for "{{Awareness_Channel1_Audience1}}".',
      input: {
        variable: 'Awareness_Channel1_Audience1_Makeup'
      }
    }, {
      prompt: 'What percentage of your Awareness budget will you allocate to this "{{Awareness_Channel1_Audience1}}"?',
      input: {
        variable: 'Awareness_Channel1_Audience1_Allocation'
      }
    }, {
      prompt: 'Name your second audience for this channel.',
      input: {
        variable: 'Awareness_Channel1_Audience2'
      }
    }, {
      prompt: 'Detail the make up for "{{Awareness_Channel1_Audience2}}".',
      input: {
        variable: 'Awareness_Channel1_Audience2_Makeup'
      }
    }, {
      prompt: 'What percentage of your Awareness budget will you allocate to this "{{Awareness_Channel1_Audience2}}"?',
      input: {
        variable: 'Awareness_Channel1_Audience2_Allocation'
      }
    }]
  }
}
