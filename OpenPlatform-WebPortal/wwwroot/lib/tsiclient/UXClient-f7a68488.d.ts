import { ChartComponent } from "./ChartComponent-a7f89f69";
declare class AvailabilityChart extends ChartComponent {
    private fromMillis;
    private toMillis;
    private selectedFromMillis;
    private selectedToMillis;
    private zoomedFromMillis;
    private zoomedToMillis;
    private minBrushWidth;
    private color;
    private transformedAvailability;
    private minGhostWidth;
    private timeContainer;
    private dateTimeButton;
    private margins;
    private targetElement;
    private uxClient;
    private brushMoveAction;
    private brushContextMenuActions;
    private timePickerLineChart;
    private timePickerContainer;
    private timePickerChart;
    private timePickerTextContainer;
    private sparkLineChart;
    private ae;
    private rawAvailability;
    private maxBuckets;
    private bucketSize;
    private dateTimePickerContainer;
    private dateTimePicker;
    constructor(renderTarget: Element);
    //the most zoomed in possible
    private getMinZoomedRange;
    private zoom;
    private setChartOptions;
    private dateTimePickerAction;
    //transformation of buckets created by the UX client to buckets for the availabilityChart
    private createDisplayBuckets;
    private setRangeVariables;
    render(transformedAvailability: any, chartOptions: any, rawAvailability?: any): void;
    private buildZoomButtons;
    private setSelectedMillis;
    private renderDateTimeButton;
    private setFromAndToTimes;
    private drawGhost;
    private drawWarmRange;
    private buildCompactFromAndTo;
    private offsetUTC;
    private buildFromAndToContainer;
    private setTicks;
    private setAvailabilityRange;
    setBrush(fromMillis: any, toMillis: any, isFromButton?: boolean): void;
    private createSparkLineOptions;
}
export { AvailabilityChart as default };