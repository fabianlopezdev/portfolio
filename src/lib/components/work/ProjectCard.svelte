<script lang='ts'>
  import { generateProjectInfo } from '../../../utils/data';
  import GitHubIcon from 'svelte-icons/fa/FaGithub.svelte';

  import type { Language } from '../../../types';
  export let projectCardLang: Language['work']['projectCard'];
  export let selectedProject;

  // console.log('seee', projectCardLang)
    let project = projectCardLang.wannago;
      $: {
          if (selectedProject = 'wannago') {
              console.log(projectCardLang)
              project = projectCardLang.wannago
            }
          } 
        
      </script>


<div class='card-container'>
<h3>{project.name}</h3>
<p>{project.description}</p>
 <a href={project?.githubLink} target='_blank'><div class='icons'><GitHubIcon/></div></a>
  
</div> 

<style>
.card-container {
  /* box-sizing: content-box; */
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  width: 20rem;
  flex: 0 0 60%;
}

h3 {
  margin-top: 0;
}
</style>