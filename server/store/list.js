module.exports = {
  1: {
    id: 1,
    name: 'Media Plan',
    steps: [{
      prompt: 'Great, what\'s the total budget?',
      input: {
        variable: 'TotalBudget'
      }
    }, {
      prompt: 'OK. This campaign, with a budget of {{TotalBudget}}, will start on?',
      input: {
        variable: 'CampaignStart'
      }
    }, {
      prompt: 'And when should the campaign run until?',
      input: {
        variable: 'CampaignEnd'
      }
    }, {
      prompt: 'OK, what is the goal of this campaign?',
      input: {
        variable: 'CampaignGoal'
      }
    }, {
      prompt: 'Sounds good. What\'s the first channel you\'d like to plan?',
      input: {
        variable: 'Channel1'
      }
    }, {
      prompt: 'OK, how much of your overall budget do you want to put towards {{Channel1}}?',
      input: {
        variable: 'Channel1Allocation'
      }
    }]
  }
}
