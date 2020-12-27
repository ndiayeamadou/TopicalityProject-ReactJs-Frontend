import axios from 'axios'

const TOPICALITY_API_BASE_URL = "http://localhost:8000/api/topicality"

class TopicalityService {

    getTopicalities() {
        return axios.get(TOPICALITY_API_BASE_URL)
    }

    createTopicality (topicality) {
        return axios.post(TOPICALITY_API_BASE_URL, topicality)
    }

    getTopicalityById (topicalityId) {
        return axios.get(TOPICALITY_API_BASE_URL +'/'+ topicalityId)
    }

    updateTopicality (topicality, topicalityId) {
        return axios.put(TOPICALITY_API_BASE_URL +'/'+ topicalityId, topicality)
    }

}

export default new TopicalityService()