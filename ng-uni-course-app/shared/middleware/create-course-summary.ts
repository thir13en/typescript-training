import CourseSummary from '../interfaces/course-summary';


function createCourseSummary({
    id,
    seqNo,
    url,
    iconUrl,
    courseListIcon,
    description,
}: any): CourseSummary {
    return { id, seqNo, url, iconUrl, courseListIcon, description };
}

export default function createCourseSummaries(dbCourses: any[]): CourseSummary[] {
    return dbCourses.map(createCourseSummary);
}
