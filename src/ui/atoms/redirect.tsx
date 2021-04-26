
export default function Redirect(props: any) {
    location.replace(props.path);
    return null;
}
