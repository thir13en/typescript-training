import LessonModel from './LessonModel';
import CourseModel from './CourseModel';

// if included associations in the models, some of them where undefined at runtime
export default function generateAssociations() {
    // Course / Lesson
    CourseModel.hasMany(LessonModel, { foreignKey: 'courseId' });
    LessonModel.belongsTo(CourseModel, { foreignKey: 'courseId' });
}
