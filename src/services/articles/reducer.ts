import { PropsTypes, ActionTypes, StateTypes } from 'src/types'

// actions
export const GET_ARTICLES = 'articles/GET_ARTICLES' as const
export const GET_ARTICLES_SUCCESS = 'articles/GET_ARTICLES_SUCCESS' as const

export const getArticleList = ({ page }: { page: number | string }) => ({
  type: GET_ARTICLES,
  payload: { page },
})

export const setArticles = ({
  articles,
  nextLink,
}: {
  articles: PropsTypes.Article[]
  nextLink: string
}) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: { articles, nextLink },
})

// state
// type ArticlesState = {
//   articles: null | PropsTypes.Article[]
//   nextLink: null | string
// }

const initialState: StateTypes.ArticlesState = {
  articles: [],
  nextLink: '',
}

function articlesReducer(
  state: StateTypes.ArticlesState = initialState,
  action: ActionTypes.Articles
) {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS: {
      const { articles, nextLink } = action.payload
      // console.log('action:', action.payload)
      return {
        ...state,
        articles,
        nextLink,
      }
    }

    default: {
      return state
    }
  }
}

export { articlesReducer }

// reducer
// export const articlesReducer = reduxUtils.createReducer<
//   ArticlesState,
//   ActionTypes.Articles
// >(initialState, {
//   [GET_ARTICLES_SUCCESS]: (
//     state: ArticlesState,
//     action: ActionTypes.Articles // FIXME: 네이밍이 Action 객체의 type과 겹치는 기분이 든다.
//   ): ArticlesState => {
//     const { articles, nextLink } = action.payload
//     console.log('action:', action.payload)
//     return {
//       ...state,
//       articles,
//       nextLink,
//     }
//   },
// })
