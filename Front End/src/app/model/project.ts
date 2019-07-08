export class Project {
    constructor(
        public projectId: number,
        public projectName: string,
        public startDate: Date,
        public endDate: Date,
        public priority: number,
        public manager: string
    ) {
    }
}
