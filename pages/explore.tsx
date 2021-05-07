import React from "react";
import { getAllTemplateProgramsCase } from "@core/program/template/case"
import ExploreProgramsTemplate from "@ui/templates/program/template/exploreProgramsTemplate";
import TemplateProgram from "@core/program/template/model/view/programTemplate.model";
import { useAuth } from "@ui/templates/user/hook/useAuth";

type ExploreProgramsProps = {
    templatePrograms: TemplateProgram[]
}

function ExplorePrograms({ templatePrograms }: ExploreProgramsProps) {
    useAuth();
    return (
        <ExploreProgramsTemplate templatePrograms={templatePrograms} />
    );
}

// This gets called on every request
export async function getServerSideProps(ctx: any) {

    let templatePrograms;
    let cookie = ctx.req.headers.cookie;
    try {
        templatePrograms = await getAllTemplateProgramsCase.execute(cookie);
        return { props: { templatePrograms: templatePrograms } }
    } catch (error) {

    }
    // Pass data to the page via props
    return { props: { templatePrograms: [] } }
}
export default ExplorePrograms;