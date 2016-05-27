class PageTitleChange
  init: (title) ->

    if typeof document.hidden isnt 'undefined'
      hidden = 'hidden'
      visibilityChange = 'visibilitychange'
      state = 'visibilityState'
      originalTitle = document.title

    document.addEventListener visibilityChange, (=>
      document.title = if document[state] is 'hidden' then title else originalTitle
    ), false

module.exports = PageTitleChange
