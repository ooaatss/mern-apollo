import { useQuery } from "@apollo/client"
import { GET_PROJECTS } from "../../graphql/Projects.js"

const ProjectList = () => {

const { loading, error, data } = useQuery(GET_PROJECTS);

   return (
    <div>ProjectList</div>
  )
}

export default ProjectList