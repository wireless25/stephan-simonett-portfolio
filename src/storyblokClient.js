import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
  accessToken: 'qPxauD1cIFuvJCz2QGg0Ewtt'
})

export const defaultRequestConfig = {
  version: 'draft'
}

export default client