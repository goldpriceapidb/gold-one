import styles from "./title.module.css"

interface TitleProps {
    pageTitle: string
}

export default function Title(prop: TitleProps): JSX.Element {
    if(!prop.pageTitle) {
        throw new Error('pageTitle prop is required');
    }
    
    if(typeof prop.pageTitle !== 'string') {
        throw new Error('pageTitle prop is not a string');
    }
    
    return (
        <div className={styles.titleContainer}>
            {getTitleText(prop.pageTitle)}
            {getSeperator()}
        </div>
    )
}

function getTitleText(pageTitle: string): JSX.Element {
    if (pageTitle) {
        return (
            <div className={styles.titleText}>
                {pageTitle}
            </div>
        )
    } else {
        return (
            <div />
        )
    }
}

function getSeperator(): JSX.Element {
    try {
        return (
            <div className={styles.seperator} />
        )
    } catch (ex) {
        console.log(ex)
        return <></>
    }
}