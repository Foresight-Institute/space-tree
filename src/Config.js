/**
 * Configuration File
 * Replace values with your information
 */

const Config = {
  title: 'Space Tech Tree',
  subtitle: 'Prototype',
  key: [
    {
      title: 'Core Technology',
      color: '#9FC4FF',
    },
    {
      title: 'Space Tech',
      color: '#FFC6FE',
    },
    {
      title: 'General Improvement',
      color: '#FDFFB6',
    }
  ],
  axis_enabled: false,
  axis_x: ['Example One', 'Example Two', 'Example Three'],
  axis_y: ['Example A', 'Example B', 'Example C'],
  github_repo_owner: 'Foresight-Institute',
  github_repo_name: 'space-tree',
  github_base_branch: 'staging',
  github_token: process.env.REACT_APP_TOKEN,
  cover_image_url: 'https://foresight.org/wp-content/uploads/2022/01/space-background2.jpg',
  tree_background_color: '#1D243C'
}

export default Config;