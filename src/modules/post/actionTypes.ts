enum ActionTypes {
  REQUEST_CREATE_POST = 'post/REQUEST_CREATE_POST',
  REQUEST_CREATE_POST_SUCCESS = 'post/REQUEST_CREATE_POST_SUCCESS',
  REQUEST_CREATE_POST_ERROR = 'post/REQUEST_CREATE_POST_ERROR',
  REQUEST_GET_POSTS = 'post/REQUEST_GET_POSTS',
  REQUEST_GET_POSTS_SUCCESS = 'post/REQUEST_GET_POSTS_SUCCESS',
  REQUEST_GET_POSTS_ERROR = 'post/REQUEST_GET_POSTS_ERROR',
  REQUEST_GET_POST_DETAIL = 'post/REQUEST_GET_POST_DETAIL',
  REQUEST_GET_POST_DETAIL_SUCCESS = 'post/REQUEST_GET_POST_DETAIL_SUCCESS',
  REQUEST_GET_POST_DETAIL_ERROR = 'post/REQUEST_GET_POST_DETAIL_ERROR',
  REQUEST_PARTICIPATE_APPLY = 'post/REQUEST_PARTICIPATE_APPLY',
  REQUEST_PARTICIPATE_APPLY_SUCCESS = 'post/REQUEST_PARTICIPATE_APPLY_SUCCESS',
  REQUEST_PARTICIPATE_APPLY_ERROR = 'post/REQUEST_PARTICIPATE_APPLY_ERROR',
  REQUEST_PARTICIPATE_CANCEL = 'post/REQUEST_PARTICIPATE_CANCEL',
  REQUEST_PARTICIPATE_CANCEL_SUCCESS = 'post/REQUEST_PARTICIPATE_CANCEL_SUCCESS',
  REQUEST_PARTICIPATE_CANCEL_ERROR = 'post/REQUEST_PARTICIPATE_CANCEL_ERROR',
  REQUEST_CREATE_COMMENT = 'post/REQUEST_CREATE_COMMENT',
  REQUEST_CREATE_COMMENT_SUCCESS = 'post/REQUEST_CREATE_COMMENT_SUCCESS',
  REQUEST_CREATE_COMMENT_ERROR = 'post/REQUEST_CREATE_COMMENT_ERROR',

  CHANGE_POST_TITLE = 'post/CHANGE_POST_TITLE',
  CHANGE_POST_CONTENT = 'post/CHANGE_POST_CONTENT',
  CHANGE_POST_TOPIC = 'post/CHANGE_POST_TOPIC',
  CHANGE_POST_ON_OFF = 'post/CHANGE_POST_ONOFF',
  CHANGE_POST_PARTICIPANT_COUNT_LIMIT = 'post/CHANGE_POST_PARTICIPANT_COUNT_LIMIT',
}

export default ActionTypes
