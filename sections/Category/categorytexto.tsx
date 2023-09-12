import type { HTML } from "deco-sites/std/components/HTMLRenderer.tsx";
import HTMLRenderer from "deco-sites/std/components/HTMLRenderer.tsx";

/** @title {{{title}}} - {{{href}}} */
export interface Link {
    title: string;
    href: string;
  }

  export interface Props {
    /** @description: Ex: "Software Engineer" */ 
     introduction: HTML;
    links?: Array<Link>;
   
  }


  export default function Intro({
      
    introduction,
    links,
   }: Props) {
    return (
        <div>    
        <HTMLRenderer html={introduction} />
        {!!links?.length && (
          <ul>
            {links.map(({ href, title }) => (
              <a href={href} sofia-label={title}>
                <li>{title}</li>              
              </a>                                 
            ))} 
          </ul>     
         )}        
     </div> 
    );
            }
            
    