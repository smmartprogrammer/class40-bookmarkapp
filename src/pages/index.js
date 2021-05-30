import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import gql from "graphql-tag"

const BookMarksQuery = gql`
  {
    bookmark {
      url
    }
  }
`
const addBookMarkMutation = gql`
  mutation addBookmark($url: String!, $desc: String!) {
    addBookmark(url: $url, desc: $desc) {
      url
    }
  }
`

export default function Home() {
  const { loading, error, data } = useQuery(BookMarksQuery)
  const [addBookMark] = useMutation(addBookmarkSubmit)

  let textfield, desc
  const addBookmarkSubmit = () => {
    addBookmark({
      variables: {
        url: textfield.value,
        desc: desc.value,
      },
    })
    console.log("textfield", textfield.value)
    console.log("desc", desc.value)
  }

  return
  ;<div>
    <p>{JSON.stringify(data)} </p>
    <div>
      <input type="text" placeholder="URL" ref={node => (textfield = node)} />
      <input
        type="text"
        placeholder="Description"
        ref={node => (desc = node)}
      />
      <button onClick={addBookmarkSubmit}>Add BookMark</button>
    </div>
  </div>
}
