import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** a number of milliseconds from the epoch (1970-01-01 00:00:00.000 UTC) */
  Timestamp: any;
};




export enum AddressFormat {
  Long = 'LONG',
  Short = 'SHORT'
}

export type AdhesiveRecipe = {
  __typename?: 'AdhesiveRecipe';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  /** JSON */
  ingredients?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['ID']>;
  vendor?: Maybe<Vendor>;
  notes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  created_at?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
};

/** The typed result of invoking the AdhesiveRecipe query engine */
export type AdhesiveRecipeQueryEngineResult = QueryEngineResult & {
  __typename?: 'AdhesiveRecipeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<AdhesiveRecipe>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type AdhesiveRecipeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type AdhesiveSpec = {
  __typename?: 'AdhesiveSpec';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  glue_type?: Maybe<AdhesiveRecipe>;
  glue_lot?: Maybe<Scalars['String']>;
  glue_volume_ml?: Maybe<Scalars['Float']>;
  glue_apply_instruction?: Maybe<Scalars['String']>;
  part_category?: Maybe<PartCategory>;
  notes?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Timestamp']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type AdhesiveSpecUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  glueTypeId?: Maybe<Scalars['ID']>;
  glueLot?: Maybe<Scalars['String']>;
  /** Precise decimal */
  glueVolumeMl?: Maybe<Scalars['String']>;
  glueApplyInstruction?: Maybe<Scalars['String']>;
  partCategoryId?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
  /** Whether this spec is active; defaults to 'true' */
  isActive?: Maybe<Scalars['Boolean']>;
};

export type AggregatedBlockDataset = Dataset & {
  __typename?: 'AggregatedBlockDataset';
  data?: Maybe<AggregatedBlockTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type AggregatedBlockMetadataDataset = Dataset & {
  __typename?: 'AggregatedBlockMetadataDataset';
  data?: Maybe<AggregatedBlockMetadataTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type AggregatedBlockMetadataTimeSeries = Timeseries & {
  __typename?: 'AggregatedBlockMetadataTimeSeries';
  blocks?: Maybe<Array<Maybe<BlockInst>>>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  stateOfCharge?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sysStateOfCharge?: Maybe<Array<Maybe<Scalars['Float']>>>;
  energy?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type AggregatedBlockTimeSeries = Timeseries & {
  __typename?: 'AggregatedBlockTimeSeries';
  blocks?: Maybe<Array<Maybe<BlockInst>>>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  chargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  voltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  temperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
  current?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** bus voltage */
  averageStringVoltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** real power */
  instantaneousPower?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sumOfStringCurrents?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type AlertCountResponse = {
  __typename?: 'AlertCountResponse';
  warnings: Scalars['Int'];
  alarms: Scalars['Int'];
  faults: Scalars['Int'];
};

export type AlertDataset = Dataset & {
  __typename?: 'AlertDataset';
  data?: Maybe<AlertTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type AlertEventType = {
  __typename?: 'AlertEventType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AlertTimeSeries = Timeseries & {
  __typename?: 'AlertTimeSeries';
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  warnings: Array<Maybe<Scalars['Int']>>;
  faults: Array<Maybe<Scalars['Int']>>;
  alarms: Array<Maybe<Scalars['Int']>>;
  blocks: Array<Maybe<BlockInst>>;
};

export type AmbientTemperature = {
  __typename?: 'AmbientTemperature';
  timestamps?: Maybe<Array<Maybe<Scalars['Timestamp']>>>;
  values?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum AssemblyLine {
  AssemblyLine_1 = 'ASSEMBLY_LINE_1',
  AssemblyLine_2 = 'ASSEMBLY_LINE_2',
  AssemblyLine_3 = 'ASSEMBLY_LINE_3'
}

export type AssemblyLinesOuput = {
  __typename?: 'AssemblyLinesOuput';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssetLifecycleStageCount = {
  __typename?: 'AssetLifecycleStageCount';
  name?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export enum AssetStatus {
  Quarantined = 'QUARANTINED',
  Assembly = 'ASSEMBLY',
  PendingApproval = 'PENDING_APPROVAL',
  FormationReady = 'FORMATION_READY',
  InFormation = 'IN_FORMATION',
  FormationDone = 'FORMATION_DONE',
  Approved = 'APPROVED',
  Available = 'AVAILABLE',
  Production = 'PRODUCTION',
  Rma = 'RMA',
  Storage = 'STORAGE',
  Rcfa = 'RCFA',
  Scrapped = 'SCRAPPED'
}

export type AssetStatusCount = {
  __typename?: 'AssetStatusCount';
  name?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
};

export type BatchBatteriesUpdate = {
  numBatteriesToAdd?: Maybe<Scalars['Int']>;
  serialNumbers?: Maybe<Array<Scalars['String']>>;
};

export type BatchPopulationAndBatteriesUpdate = {
  populationName: Scalars['String'];
  numBatteriesToAdd: Scalars['Int'];
};

export type BatteriesInContainerOutput = ContainerSignOffFields & {
  __typename?: 'BatteriesInContainerOutput';
  batteriesByStack?: Maybe<Array<Maybe<BatteryStackOutput>>>;
  containerSerialNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
};

export type BatteriesQcInContainerOutput = ContainerSignOffFields & {
  __typename?: 'BatteriesQcInContainerOutput';
  batteriesByStackQc?: Maybe<Array<Maybe<BatteryStackQcOutput>>>;
  containerSerialNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
};

export type Battery = {
  __typename?: 'Battery';
  serialNumber: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  endOfLifedAt?: Maybe<Scalars['Timestamp']>;
  batteryLocationHistory: BatteryLocationHistoryQueryEngineResult;
};


export type BatteryBatteryLocationHistoryArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};

export type BatteryAdminUpdateAssemblyInput = {
  serialNumber: Array<Maybe<Scalars['String']>>;
  comments?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
};

export type BatteryAlertAggregate = {
  __typename?: 'BatteryAlertAggregate';
  id: Scalars['ID'];
  serialNumber: Scalars['ID'];
  batteryId: Scalars['ID'];
  eventAt: Scalars['Timestamp'];
  eventValue: Scalars['String'];
  stringSerialNumber: Scalars['String'];
  stringId: Scalars['ID'];
  eosBlockId: Scalars['String'];
  blockId: Scalars['ID'];
  severity: Scalars['String'];
  durationMs: Scalars['Int'];
  /** true = state went to high, false = state went to low */
  eventStateSet: Scalars['Boolean'];
};

export type BatteryAlertAggregateByBattery = {
  __typename?: 'BatteryAlertAggregateByBattery';
  serialNumber: Scalars['String'];
  batteryId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertAggregateByBatteryQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateByBatteryQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregateByBattery>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryAlertAggregateByBlock = {
  __typename?: 'BatteryAlertAggregateByBlock';
  eosBlockId: Scalars['ID'];
  blockId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertAggregateByBlockQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateByBlockQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregateByBlock>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryAlertAggregateBySeverity = {
  __typename?: 'BatteryAlertAggregateBySeverity';
  severity: Scalars['String'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertAggregateBySeverityQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateBySeverityQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregateBySeverity>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryAlertAggregateBySite = {
  __typename?: 'BatteryAlertAggregateBySite';
  eosSiteId: Scalars['ID'];
  siteId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

export type BatteryAlertAggregateBySiteQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateBySiteQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregateBySite>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryAlertAggregateByString = {
  __typename?: 'BatteryAlertAggregateByString';
  stringSerialNumber: Scalars['ID'];
  stringId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertAggregateByStringQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateByStringQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregateByString>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryAlertAggregateBySubgroup = {
  __typename?: 'BatteryAlertAggregateBySubgroup';
  eosSubgroupId: Scalars['String'];
  subgroupId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertAggregateBySubgroupQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateBySubgroupQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregateBySubgroup>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertAggregateQueryEngineResult = {
  __typename?: 'BatteryAlertAggregateQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertAggregate>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryAlertDataset = Dataset & {
  __typename?: 'BatteryAlertDataset';
  data?: Maybe<BatteryAlertTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type BatteryAlertEvent = {
  __typename?: 'BatteryAlertEvent';
  id: Scalars['ID'];
  batteryId: Scalars['ID'];
  battery: BatteryInst;
  eventAt: Scalars['Timestamp'];
  eventValue: Scalars['String'];
  eventTypeId: Scalars['ID'];
  eventType: AlertEventType;
  /** true = state went to high, false = state went to low */
  eventStateSet: Scalars['Boolean'];
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BatteryAlertEventQueryEngineResult = {
  __typename?: 'BatteryAlertEventQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryAlertEvent>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  timeZone?: Maybe<Scalars['String']>;
};

export type BatteryAlertTimeSeries = Timeseries & {
  __typename?: 'BatteryAlertTimeSeries';
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  warnings: Array<Maybe<Scalars['Int']>>;
  faults: Array<Maybe<Scalars['Int']>>;
  alarms: Array<Maybe<Scalars['Int']>>;
  batteries: Array<Maybe<BatteryInst>>;
};

export type BatteryBuildMatrix = {
  __typename?: 'BatteryBuildMatrix';
  /**
   * Unique database identifier, created by a user
   * @deprecated Use camel-case variant
   */
  serial_number: Scalars['String'];
  serialNumber: Scalars['String'];
  experiment?: Maybe<Experiment>;
  /** @deprecated Use camel-case variant */
  population_id?: Maybe<Scalars['String']>;
  populationId?: Maybe<Scalars['String']>;
  projectPopulationId?: Maybe<Scalars['ID']>;
  population?: Maybe<BatteryPopulation>;
  /** @deprecated Use camel-case variant */
  experimental_group?: Maybe<ExperimentalGroup>;
  experimentalGroup?: Maybe<ExperimentalGroup>;
  /** @deprecated Use camel-case variant */
  cell_type?: Maybe<CellType>;
  cellTypeName?: Maybe<Scalars['String']>;
  cellType?: Maybe<CellType>;
  /** @deprecated Use camel-case variant */
  cell_count: Scalars['Int'];
  cellCount: Scalars['Int'];
  /** @deprecated Use camel-case variant */
  battery_design?: Maybe<BatteryDesign>;
  batteryDesign?: Maybe<BatteryDesign>;
  /** @deprecated Use camel-case variant */
  frame_assembly?: Maybe<FrameAssemblySpec>;
  frameAssembly?: Maybe<FrameAssemblySpec>;
  /** @deprecated Use camel-case variant */
  adhesive_spec?: Maybe<AdhesiveSpec>;
  adhesiveSpec?: Maybe<AdhesiveSpec>;
  /** @deprecated Use camel-case variant */
  felt_spec?: Maybe<FeltSpec>;
  feltSpec?: Maybe<FeltSpec>;
  /** @deprecated Use 'terminalCathode' */
  terminal_cathode_cc?: Maybe<PlateType>;
  terminalCathode?: Maybe<PlateType>;
  /** @deprecated Use 'anode' */
  anode_cc?: Maybe<PlateType>;
  anode?: Maybe<PlateType>;
  /** @deprecated Use bipolarCathode */
  bipolar_cathode_cc?: Maybe<PlateType>;
  bipolarCathode?: Maybe<PlateType>;
  /** @deprecated Use camel-case variant */
  electrolyte_filling_spec?: Maybe<ElectrolyteFillingSpec>;
  electrolyteFillingSpec?: Maybe<ElectrolyteFillingSpec>;
  /** @deprecated Use camel-case variant */
  cycling_program?: Maybe<CyclingProgram>;
  cyclingProgram?: Maybe<CyclingProgram>;
  /** @deprecated Use camel-case variant */
  cycler_channel?: Maybe<CyclerChannel>;
  cyclerChannel?: Maybe<CyclerChannel>;
  stage?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  tag_color?: Maybe<Scalars['String']>;
  tagColor?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  created_at?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  battery_test?: Maybe<BatteryTest>;
  batteryTest?: Maybe<BatteryTest>;
  /** @deprecated Use camel-case variant */
  autopsy_images: Array<BatteryFile>;
  autopsyImages: Array<BatteryFile>;
  /** @deprecated Use camel-case variant */
  eis_files: Array<BatteryFile>;
  eisFiles: Array<BatteryFile>;
  /** @deprecated Use camel-case variant */
  dta_files: Array<BatteryFile>;
  dtaFiles: Array<BatteryFile>;
  /** @deprecated Use camel-case variant */
  report_files: Array<BatteryFile>;
  reportFiles: Array<BatteryFile>;
  /** @deprecated Use camel-case variant */
  paper_traveler_files: Array<BatteryFile>;
  paperTravelerFiles: Array<BatteryFile>;
  onTest?: Maybe<Scalars['Boolean']>;
  hasNote?: Maybe<Scalars['Boolean']>;
  dryBatteryTestProcess?: Maybe<Array<Maybe<DryBatteryTestProcess>>>;
  electrodeAssemblyProcess?: Maybe<ElectrodeAssemblyProcess>;
  failureAnalysisAutopsyProcess?: Maybe<FailureAnalysisAutopsyProcess>;
  feltModificationProcess?: Maybe<FeltModificationProcess>;
  frameAssemblyProcess?: Maybe<FrameAssemblyProcess>;
  furnaceProcess?: Maybe<FurnaceProcess>;
  hardwareInfoRecordingProcess?: Maybe<HardwareInfoRecordingProcess>;
  labTestProcess?: Maybe<Array<Maybe<LabTestProcess>>>;
  pressProcess?: Maybe<PressProcess>;
  weldProcess?: Maybe<WeldProcess>;
  washProcess?: Maybe<WashProcess>;
  wetBatteryTestProcess?: Maybe<WetBatteryEisTestProcess>;
  electrolyteFillingProcess?: Maybe<ElectrolyteFillingProcess>;
};


export type BatteryBuildMatrixLabTestProcessArgs = {
  collectionId?: Maybe<Scalars['ID']>;
};

/** The typed result of invoking the BatteryBuildMatrix query engine */
export type BatteryBuildMatrixQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryBuildMatrixQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryBuildMatrix>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryBuildMatrixUpdate = {
  serial_number?: Maybe<Scalars['String']>;
  populationId?: Maybe<Scalars['ID']>;
  experimentalGroupId?: Maybe<Scalars['ID']>;
  batteryDesignId?: Maybe<Scalars['ID']>;
  cyclerChannelId?: Maybe<Scalars['ID']>;
  color?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
};

export type BatteryCommentsView = {
  __typename?: 'BatteryCommentsView';
  id: Scalars['ID'];
  batterySerialNumber?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  commentedBy?: Maybe<Scalars['ID']>;
  commentedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type BatteryDataset = Dataset & {
  __typename?: 'BatteryDataset';
  data?: Maybe<BatteryInBlockTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

/** FIXME This type is currently confusing, we need to further clarify it's purpose. Do not use this type */
export type BatteryDesign = {
  __typename?: 'BatteryDesign';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The design's name */
  name: Scalars['String'];
  /** @deprecated Use camel-case variant */
  design_id?: Maybe<Scalars['String']>;
  designId?: Maybe<Scalars['String']>;
  /** A description */
  description?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  /** The design iteration */
  revision?: Maybe<Scalars['String']>;
};

export type BatteryDesignUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  designId?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type BatteryFile = {
  __typename?: 'BatteryFile';
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  file_category?: Maybe<FileCategory>;
  fileCategory?: Maybe<FileCategory>;
  /** @deprecated Use camel-case variant */
  uploaded_at: Scalars['Timestamp'];
  uploadedAt: Scalars['Timestamp'];
  /** @deprecated Use camel-case variant */
  content_type?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  size: Scalars['Float'];
  url: Scalars['String'];
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
};

export type BatteryFileUpdate = {
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
};

export type BatteryInBlockTimeSeries = Timeseries & {
  __typename?: 'BatteryInBlockTimeSeries';
  stringPosition?: Maybe<Scalars['String']>;
  batteryPosition?: Maybe<Scalars['String']>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  voltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  temperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type BatteryInput = {
  serialNumber?: Maybe<Scalars['String']>;
  cellTypeId?: Maybe<Scalars['Int']>;
  manufacturingSpecId?: Maybe<Scalars['Int']>;
  assemblySiteId?: Maybe<Scalars['Int']>;
  fillingSiteId?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  assemblyLineNum: Scalars['Int'];
  assetStatus: Scalars['String'];
  assetLifecycleStage: Scalars['String'];
  useCase: Scalars['Int'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  endOfLifedAt?: Maybe<Scalars['Timestamp']>;
};

export type BatteryInst = {
  __typename?: 'BatteryInst';
  id: Scalars['ID'];
  stringId: Scalars['ID'];
  positionInString: Scalars['String'];
  serialNumber: Scalars['String'];
  battery?: Maybe<Battery>;
  modelName?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  string: StringInst;
  /**
   * decimationSamplesPerDay: Int!
   * samplesPerDay: Int!
   *  results in one request per battery use batteryTimeseries instead for multiple requests
   */
  timeSeries?: Maybe<BatteryDataset>;
  alertTimeSeries?: Maybe<BatteryAlertDataset>;
  histogram?: Maybe<HistogramDataset>;
  installationAddress: Scalars['String'];
  alertCount: AlertCountResponse;
};


export type BatteryInstTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BatteryInstAlertTimeSeriesArgs = {
  filtering?: Maybe<FilterInput>;
};


export type BatteryInstHistogramArgs = {
  filtering?: Maybe<FilterInput>;
  column?: Maybe<Scalars['String']>;
  binSize?: Maybe<Scalars['Float']>;
  binCount?: Maybe<Scalars['Int']>;
  binStart?: Maybe<Scalars['Float']>;
};

export type BatteryInstInput = {
  stringId?: Maybe<Scalars['Int']>;
  positionInString?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  modelName?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

/** The typed result of invoking the SiteInst query engine */
export type BatteryInstQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryInstQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryInst>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryLocationHistory = {
  __typename?: 'BatteryLocationHistory';
  id: Scalars['ID'];
  stringId: Scalars['ID'];
  string: StringInst;
  batterySerialNumber?: Maybe<Scalars['String']>;
  battery: Battery;
  batteryInst?: Maybe<BatteryInst>;
  positionInString: Scalars['String'];
  actionAt?: Maybe<Scalars['Timestamp']>;
  actionName?: Maybe<Scalars['String']>;
  installationAddress?: Maybe<Scalars['String']>;
};


export type BatteryLocationHistoryInstallationAddressArgs = {
  format?: Maybe<AddressFormat>;
};

/** The typed result of invoking the SiteInst query engine */
export type BatteryLocationHistoryQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryLocationHistoryQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryLocationHistory>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  csvDownloadPath?: Maybe<Scalars['String']>;
};

export type BatteryNotesView = {
  __typename?: 'BatteryNotesView';
  id: Scalars['ID'];
  batterySerialNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  commentedBy?: Maybe<Scalars['ID']>;
  commentedAt?: Maybe<Scalars['Timestamp']>;
  lastCommentedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  edited?: Maybe<Scalars['Boolean']>;
};

export type BatteryPopulation = {
  __typename?: 'BatteryPopulation';
  id: Scalars['ID'];
  experimentId?: Maybe<Scalars['ID']>;
  experiment?: Maybe<Experiment>;
  name?: Maybe<Scalars['String']>;
  cellTypeName?: Maybe<Scalars['String']>;
  cellType?: Maybe<CellType>;
  frameTypeId?: Maybe<Scalars['ID']>;
  frameType?: Maybe<FrameType>;
  oRingTypeId?: Maybe<Scalars['ID']>;
  oRingType?: Maybe<ORingType>;
  /** @deprecated Use oRingType.vendorId */
  oRingManufacturerId?: Maybe<Scalars['ID']>;
  /** @deprecated Use oRingType.vendor */
  oRingManufacturer?: Maybe<Vendor>;
  frameAssemblyInstructions?: Maybe<Scalars['String']>;
  feltGlueTypeId?: Maybe<Scalars['ID']>;
  feltGlueType?: Maybe<AdhesiveRecipe>;
  /** Precise decimal */
  feltGlueVolumeMl?: Maybe<Scalars['String']>;
  feltGlueApplyInstructions?: Maybe<Scalars['String']>;
  frameGlueTypeId?: Maybe<Scalars['ID']>;
  frameGlueType?: Maybe<AdhesiveRecipe>;
  /** Precise decimal */
  frameGlueVolumeMl?: Maybe<Scalars['String']>;
  frameGlueApplyInstructions?: Maybe<Scalars['String']>;
  feltTypeId?: Maybe<Scalars['ID']>;
  feltType?: Maybe<FeltType>;
  /** Precise decimal */
  feltSizeLengthIn?: Maybe<Scalars['String']>;
  /** Precise decimal */
  feltSizeWidthIn?: Maybe<Scalars['String']>;
  /** Precise decimal */
  feltSizeThicknessMm?: Maybe<Scalars['String']>;
  feltInstructions?: Maybe<Scalars['String']>;
  anodeId?: Maybe<Scalars['ID']>;
  /** @deprecated Use 'anode' */
  anodePlateType?: Maybe<PlateType>;
  anode?: Maybe<PlateType>;
  anodeInstructions?: Maybe<Scalars['String']>;
  anodeCcMaterialId?: Maybe<Scalars['ID']>;
  anodeMaterial?: Maybe<CompositeMaterial>;
  terminalCathodeId?: Maybe<Scalars['ID']>;
  /** @deprecated Use 'terminalCathode' */
  terminalCathodePlateType?: Maybe<PlateType>;
  terminalCathode?: Maybe<PlateType>;
  terminalCathodeInstructions?: Maybe<Scalars['String']>;
  terminalCcMaterialId?: Maybe<Scalars['ID']>;
  terminalCathodeMaterial?: Maybe<CompositeMaterial>;
  bipolarCathodeId?: Maybe<Scalars['ID']>;
  /** @deprecated Use 'bipolarCathode' */
  bipolarCathodePlateType?: Maybe<PlateType>;
  bipolarCathode?: Maybe<PlateType>;
  bipolarCathodeInstructions?: Maybe<Scalars['String']>;
  bipolarCathodeCcMaterialId?: Maybe<Scalars['ID']>;
  bipolarCathodeMaterial?: Maybe<CompositeMaterial>;
  electrolyteRecipeId?: Maybe<Scalars['ID']>;
  electrolyteRecipe?: Maybe<ElectrolyteRecipe>;
  /** Precise decimal */
  electrolyteVolumeMl?: Maybe<Scalars['String']>;
  electrolyteFillingInstructions?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  puckTypeId?: Maybe<Scalars['ID']>;
  puckType?: Maybe<PuckType>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  locked: Scalars['Boolean'];
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  batteryBuildMatrixCount: Scalars['Int'];
  neutralFrameTypeId?: Maybe<Scalars['ID']>;
  neutralFrameType?: Maybe<FrameType>;
  positiveFrameTypeId?: Maybe<Scalars['ID']>;
  positiveFrameType?: Maybe<FrameType>;
  negativeFrameTypeId?: Maybe<Scalars['ID']>;
  negativeFrameType?: Maybe<FrameType>;
  oringInstructions?: Maybe<Scalars['String']>;
  cyclingProgramId?: Maybe<Scalars['ID']>;
  cyclingProgram?: Maybe<CyclingProgram>;
  cyclingProgramInstructions?: Maybe<Scalars['String']>;
  autopsyInstructions?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

/** The typed result of invoking the BatteryPopulation query engine */
export type BatteryPopulationQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryPopulationQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryPopulation>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryPopulationUpdate = {
  id?: Maybe<Scalars['ID']>;
  experimentId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  cellTypeName?: Maybe<Scalars['String']>;
  frameTypeId?: Maybe<Scalars['ID']>;
  oRingTypeId?: Maybe<Scalars['ID']>;
  oRingManufacturerId?: Maybe<Scalars['ID']>;
  frameAssemblyInstructions?: Maybe<Scalars['String']>;
  feltGlueTypeId?: Maybe<Scalars['ID']>;
  /** Precise decimal */
  feltGlueVolumeMl?: Maybe<Scalars['String']>;
  feltGlueInstructions?: Maybe<Scalars['String']>;
  frameGlueTypeId?: Maybe<Scalars['ID']>;
  /** Precise decimal */
  frameGlueVolumeMl?: Maybe<Scalars['String']>;
  frameGlueInstructions?: Maybe<Scalars['String']>;
  feltTypeId?: Maybe<Scalars['ID']>;
  /** Precise decimal */
  feltSizeLengthIn?: Maybe<Scalars['String']>;
  /** Precise decimal */
  feltSizeWidthIn?: Maybe<Scalars['String']>;
  /** Precise decimal */
  feltSizeThicknessMm?: Maybe<Scalars['String']>;
  feltInstructions?: Maybe<Scalars['String']>;
  anodeCCPlateTypeId?: Maybe<Scalars['ID']>;
  anodeCCMaterialId?: Maybe<Scalars['ID']>;
  anodeInstructions?: Maybe<Scalars['String']>;
  terminalCathodeCCPlateTypeId?: Maybe<Scalars['ID']>;
  terminalCathodeCCMaterialId?: Maybe<Scalars['ID']>;
  terminalCathodeInstructions?: Maybe<Scalars['String']>;
  bipolarCathodeCCPlateTypeId?: Maybe<Scalars['ID']>;
  bipolarCathodeCCMaterialId?: Maybe<Scalars['ID']>;
  bipolarCathodeInstructions?: Maybe<Scalars['String']>;
  electrolyteRecipeId?: Maybe<Scalars['ID']>;
  /** Precise decimal */
  electrolyteVolumeMl?: Maybe<Scalars['String']>;
  electrolyteFillingInstructions?: Maybe<Scalars['String']>;
  cyclingProgramId?: Maybe<Scalars['ID']>;
  cyclingProgramInstructions?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  puckTypeId?: Maybe<Scalars['ID']>;
  notes?: Maybe<Scalars['String']>;
  neutralFrameTypeId?: Maybe<Scalars['ID']>;
  positiveFrameTypeId?: Maybe<Scalars['ID']>;
  negativeFrameTypeId?: Maybe<Scalars['ID']>;
  oringInstructions?: Maybe<Scalars['String']>;
  autopsyInstructions?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['Boolean']>;
  copy?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type BatteryQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryQueryEngineResult';
  results: Array<Battery>;
  resultCount: Scalars['Int'];
  totalCount: Scalars['Int'];
};

export type BatteryStackInput = {
  containerSerialNumber: Scalars['String'];
  batterySerialNumber: Scalars['String'];
  position: Scalars['String'];
};

export type BatteryStackOutput = {
  __typename?: 'BatteryStackOutput';
  containerSerialNumber: Scalars['String'];
  batterySerialNumber?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type BatteryStackQcInput = {
  containerSerialNumber: Scalars['String'];
  batterySerialNumber: Scalars['String'];
  position: Scalars['String'];
  torqueInSpec?: Maybe<Scalars['Boolean']>;
  receivedBy: Scalars['ID'];
};

export type BatteryStackQcOutput = {
  __typename?: 'BatteryStackQcOutput';
  containerSerialNumber: Scalars['String'];
  batterySerialNumber?: Maybe<Scalars['String']>;
  position: Scalars['String'];
  torqueInSpec?: Maybe<Scalars['Boolean']>;
  receivedBy?: Maybe<Scalars['ID']>;
  operator?: Maybe<Scalars['String']>;
};

export type BatteryStatus = {
  __typename?: 'BatteryStatus';
  /** Unique database identifier */
  id: Scalars['ID'];
  stage: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
};

export type BatteryStatusQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryStatusQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryStatus>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** A collection of test cycles run on a battery */
export type BatteryTest = {
  __typename?: 'BatteryTest';
  batterySerialNumber: Scalars['String'];
  /**
   * The battery's description
   * @deprecated Use batteryBuildMatrix
   */
  battery_build_matrix: BatteryBuildMatrix;
  batteryBuildMatrix: BatteryBuildMatrix;
  /** HDF5 Groupings + their started_at timestamps */
  metadata?: Maybe<Array<BatteryTestMetadata>>;
  /** The test cycles this battery has undergone */
  cycles?: Maybe<Array<BatteryTestCycle>>;
  cyclesByEngine: BatteryTestCycleQueryEngineResult;
  /**
   * The most recent test cycle this battery has undergone; only valid for a non-grouped BatteryTest
   * @deprecated Use latestCycle
   */
  latest_cycle?: Maybe<BatteryTestCycle>;
  latestCycle?: Maybe<BatteryTestCycle>;
  /** The average of the most recent 5 cycles this battery has undergone; only valid for a non-grouped BatteryTest */
  averageOfLatestFiveCycles?: Maybe<BatteryTestCycle>;
  /**
   * EE(N-5), where N is the index of latest cycle
   * @deprecated use latestEnergyEfficiencyMain
   */
  latest_energy_efficiency_main?: Maybe<Scalars['Float']>;
  latestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  /**
   * EE25, or EE0, depending on the information source
   * @deprecated use initialEnergyEfficiencyMain
   */
  initial_energy_efficiency_main?: Maybe<Scalars['Float']>;
  initialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  /**
   * EE100, or EE1, depending on the information source
   * @deprecated use hundredthEnergyEfficiencyMain
   */
  hundredth_energy_efficiency_main?: Maybe<Scalars['Float']>;
  hundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  /**
   * This battery's composite score
   * @deprecated use compositeScore
   */
  composite_score?: Maybe<Scalars['Float']>;
  compositeScore?: Maybe<Scalars['Float']>;
  /**
   * The uncertainty in the composite score
   * @deprecated use compositeScoreDelta
   */
  composite_score_delta?: Maybe<Scalars['Float']>;
  compositeScoreDelta?: Maybe<Scalars['Float']>;
  /**
   * The composite score adjusted for the worst case
   * @deprecated use compositeScoreMinimum
   */
  composite_score_minimum?: Maybe<Scalars['Float']>;
  compositeScoreMinimum?: Maybe<Scalars['Float']>;
  /**
   * The composite score adjusted for the best case
   * @deprecated use compositeScoreMaximum
   */
  composite_score_maximum?: Maybe<Scalars['Float']>;
  compositeScoreMaximum?: Maybe<Scalars['Float']>;
  /** Precise decimal, obtained from this battery's WetBatteryEISTestProcess */
  ohmicResistance?: Maybe<Scalars['String']>;
};


/** A collection of test cycles run on a battery */
export type BatteryTestCyclesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortColumn?: Maybe<Scalars['String']>;
  sortDirection?: Maybe<Direction>;
};


/** A collection of test cycles run on a battery */
export type BatteryTestCyclesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};

export type BatteryTestAggregate = {
  __typename?: 'BatteryTestAggregate';
  batterySerialNumber: Scalars['ID'];
  batteryBuildMatrix: BatteryBuildMatrix;
  metadata?: Maybe<Array<BatteryTestMetadata>>;
  initialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  hundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  latestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  compositeScore?: Maybe<Scalars['Float']>;
  compositeScoreDelta?: Maybe<Scalars['Float']>;
  compositeScoreMinimum?: Maybe<Scalars['Float']>;
  compositeScoreMaximum?: Maybe<Scalars['Float']>;
  cyclesByEngine: BatteryTestCycleQueryEngineResult;
  averageOfLatestFiveCycles?: Maybe<BatteryTestCycle>;
  cycleCount?: Maybe<Scalars['Int']>;
  latestCycle?: Maybe<BatteryTestCycle>;
  ohmicResistance?: Maybe<Scalars['String']>;
  testsStartedAt?: Maybe<Scalars['Timestamp']>;
  testsEndedAt?: Maybe<Scalars['Timestamp']>;
  batteryHasNotes?: Maybe<Scalars['Boolean']>;
};


export type BatteryTestAggregateCyclesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};

export type BatteryTestAggregateQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestAggregateQueryEngineResult';
  results: Array<BatteryTestAggregate>;
  resultCount: Scalars['Int'];
  totalCount: Scalars['Int'];
};

/** Maps to net.peaxy.luna.battery.collection.BatteryCollectionRow, TODO: Change GQL type name to match */
export type BatteryTestCollection = {
  __typename?: 'BatteryTestCollection';
  id: Scalars['ID'];
  name: Scalars['String'];
  /** @deprecated Use createdAt */
  created_at: Scalars['Timestamp'];
  createdAt: Scalars['Timestamp'];
  owner: User;
  subscribers: Array<User>;
  subscribed: Scalars['Boolean'];
  favorited: Scalars['Boolean'];
  /**
   * The time at which this collection was published. It is set to 0 or null if not published.
   * @deprecated Use sharedAt
   */
  shared_at?: Maybe<Scalars['Timestamp']>;
  sharedAt?: Maybe<Scalars['Timestamp']>;
  notes?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  uiState?: Maybe<Scalars['String']>;
  queryResultCount: Scalars['Int'];
  csv: BatteryTestCollectionCsvResult;
  /**
   * JSON: String TODO type -> ConstraintGroup
   * @deprecated use predicate
   */
  filter?: Maybe<Scalars['String']>;
  query: Array<BatteryTestGroup>;
  experiments: Array<Scalars['String']>;
};


/** Maps to net.peaxy.luna.battery.collection.BatteryCollectionRow, TODO: Change GQL type name to match */
export type BatteryTestCollectionUiStateArgs = {
  key: Scalars['String'];
};


/** Maps to net.peaxy.luna.battery.collection.BatteryCollectionRow, TODO: Change GQL type name to match */
export type BatteryTestCollectionQueryResultCountArgs = {
  groupings?: Maybe<Array<Scalars['String']>>;
};


/** Maps to net.peaxy.luna.battery.collection.BatteryCollectionRow, TODO: Change GQL type name to match */
export type BatteryTestCollectionCsvArgs = {
  fields: Array<BatteryTestCollectionField>;
};


/** Maps to net.peaxy.luna.battery.collection.BatteryCollectionRow, TODO: Change GQL type name to match */
export type BatteryTestCollectionQueryArgs = {
  options: QueryOptions;
};

export type BatteryTestCollectionCsvResult = {
  __typename?: 'BatteryTestCollectionCsvResult';
  url: Scalars['String'];
};

export enum BatteryTestCollectionField {
  Recipe = 'RECIPE',
  Experiment = 'EXPERIMENT',
  Population = 'POPULATION',
  Build = 'BUILD',
  CompositeScore = 'COMPOSITE_SCORE',
  CompositeScoreDelta = 'COMPOSITE_SCORE_DELTA',
  CompositeScoreMin = 'COMPOSITE_SCORE_MIN',
  CompositeScoreMax = 'COMPOSITE_SCORE_MAX',
  Ee0 = 'EE0',
  Ee1 = 'EE1',
  EeLatest = 'EE_LATEST',
  OnTest = 'ON_TEST',
  FeltName = 'FELT_NAME',
  AnodePlateType = 'ANODE_PLATE_TYPE',
  CathodePlateType = 'CATHODE_PLATE_TYPE',
  PlateTypeName = 'PLATE_TYPE_NAME',
  FrameTypeName = 'FRAME_TYPE_NAME',
  ExperimentOwnerEmail = 'EXPERIMENT_OWNER_EMAIL',
  CellIdStringLength = 'CELL_ID_STRING_LENGTH',
  OhmicResistance = 'OHMIC_RESISTANCE',
  TestEndedAt = 'TEST_ENDED_AT',
  TestStartedAt = 'TEST_STARTED_AT',
  CyclingProgramName = 'CYCLING_PROGRAM_NAME',
  CyclingProgramTemperature = 'CYCLING_PROGRAM_TEMPERATURE',
  Cycler = 'CYCLER',
  CyclerChannel = 'CYCLER_CHANNEL',
  CycleCount = 'CYCLE_COUNT',
  Stage = 'STAGE',
  LatestAverageChargeVoltage = 'LATEST_AVERAGE_CHARGE_VOLTAGE',
  LatestAverageDischargeVoltage = 'LATEST_AVERAGE_DISCHARGE_VOLTAGE',
  LatestBottomOfDischargeRestTime = 'LATEST_BOTTOM_OF_DISCHARGE_REST_TIME',
  LatestCoulombicEfficiencyAll = 'LATEST_COULOMBIC_EFFICIENCY_ALL',
  LatestCoulombicEfficiencyMain = 'LATEST_COULOMBIC_EFFICIENCY_MAIN',
  LatestChargeCapacityAll = 'LATEST_CHARGE_CAPACITY_ALL',
  LatestChargeCapacityMain = 'LATEST_CHARGE_CAPACITY_MAIN',
  LatestChargeEnergyAll = 'LATEST_CHARGE_ENERGY_ALL',
  LatestChargeEnergyMain = 'LATEST_CHARGE_ENERGY_MAIN',
  LatestChargeTimeAll = 'LATEST_CHARGE_TIME_ALL',
  LatestChargeTimeMain = 'LATEST_CHARGE_TIME_MAIN',
  LatestChargePowerMain = 'LATEST_CHARGE_POWER_MAIN',
  LatestChargePowerSecondary = 'LATEST_CHARGE_POWER_SECONDARY',
  LatestDischargeCapacityAll = 'LATEST_DISCHARGE_CAPACITY_ALL',
  LatestDischargeCapacityMain = 'LATEST_DISCHARGE_CAPACITY_MAIN',
  LatestDischargeEnergyAll = 'LATEST_DISCHARGE_ENERGY_ALL',
  LatestDischargeEnergyMain = 'LATEST_DISCHARGE_ENERGY_MAIN',
  LatestDischargeTimeAll = 'LATEST_DISCHARGE_TIME_ALL',
  LatestDischargeTimeMain = 'LATEST_DISCHARGE_TIME_MAIN',
  LatestDischargePowerMain = 'LATEST_DISCHARGE_POWER_MAIN',
  LatestDischargePowerSecondary = 'LATEST_DISCHARGE_POWER_SECONDARY',
  LatestEnergyEfficiencyAll = 'LATEST_ENERGY_EFFICIENCY_ALL',
  LatestEnergyEfficiencyMain = 'LATEST_ENERGY_EFFICIENCY_MAIN',
  LatestFinalChargeVoltage = 'LATEST_FINAL_CHARGE_VOLTAGE',
  LatestInitialDischargeVoltage = 'LATEST_INITIAL_DISCHARGE_VOLTAGE',
  LatestTopOfChargeRestTime = 'LATEST_TOP_OF_CHARGE_REST_TIME',
  LatestChargeToTopOfChargeIrDrop = 'LATEST_CHARGE_TO_TOP_OF_CHARGE_IR_DROP',
  LatestTopOfChargeToDischargeIrDrop = 'LATEST_TOP_OF_CHARGE_TO_DISCHARGE_IR_DROP',
  LatestCycleIndex = 'LATEST_CYCLE_INDEX',
  LatestStepCount = 'LATEST_STEP_COUNT',
  LatestAvTemperatureMeasured = 'LATEST_AV_TEMPERATURE_MEASURED',
  LatestTemperatureMeasuredStdDeviation = 'LATEST_TEMPERATURE_MEASURED_STD_DEVIATION',
  AverageLatestFiveChargeVoltage = 'AVERAGE_LATEST_FIVE_CHARGE_VOLTAGE',
  AverageLatestFiveDischargeVoltage = 'AVERAGE_LATEST_FIVE_DISCHARGE_VOLTAGE',
  AverageLatestFiveBottomOfDischargeRestTime = 'AVERAGE_LATEST_FIVE_BOTTOM_OF_DISCHARGE_REST_TIME',
  AverageLatestFiveCoulombicEfficiencyAll = 'AVERAGE_LATEST_FIVE_COULOMBIC_EFFICIENCY_ALL',
  AverageLatestFiveCoulombicEfficiencyMain = 'AVERAGE_LATEST_FIVE_COULOMBIC_EFFICIENCY_MAIN',
  AverageLatestFiveDischargeCapacityAll = 'AVERAGE_LATEST_FIVE_DISCHARGE_CAPACITY_ALL',
  AverageLatestFiveDischargeCapacityMain = 'AVERAGE_LATEST_FIVE_DISCHARGE_CAPACITY_MAIN',
  AverageLatestFiveDischargeEnergyAll = 'AVERAGE_LATEST_FIVE_DISCHARGE_ENERGY_ALL',
  AverageLatestFiveDischargeEnergyMain = 'AVERAGE_LATEST_FIVE_DISCHARGE_ENERGY_MAIN',
  AverageLatestFiveDischargeTimeAll = 'AVERAGE_LATEST_FIVE_DISCHARGE_TIME_ALL',
  AverageLatestFiveDischargeTimeMain = 'AVERAGE_LATEST_FIVE_DISCHARGE_TIME_MAIN',
  AverageLatestFiveDischargePowerMain = 'AVERAGE_LATEST_FIVE_DISCHARGE_POWER_MAIN',
  AverageLatestFiveDischargePowerSecondary = 'AVERAGE_LATEST_FIVE_DISCHARGE_POWER_SECONDARY',
  AverageLatestFiveChargeCapacityAll = 'AVERAGE_LATEST_FIVE_CHARGE_CAPACITY_ALL',
  AverageLatestFiveChargeCapacityMain = 'AVERAGE_LATEST_FIVE_CHARGE_CAPACITY_MAIN',
  AverageLatestFiveChargeEnergyAll = 'AVERAGE_LATEST_FIVE_CHARGE_ENERGY_ALL',
  AverageLatestFiveChargeEnergyMain = 'AVERAGE_LATEST_FIVE_CHARGE_ENERGY_MAIN',
  AverageLatestFiveChargeTimeAll = 'AVERAGE_LATEST_FIVE_CHARGE_TIME_ALL',
  AverageLatestFiveChargeTimeMain = 'AVERAGE_LATEST_FIVE_CHARGE_TIME_MAIN',
  AverageLatestFiveChargePowerMain = 'AVERAGE_LATEST_FIVE_CHARGE_POWER_MAIN',
  AverageLatestFiveChargePowerSecondary = 'AVERAGE_LATEST_FIVE_CHARGE_POWER_SECONDARY',
  AverageLatestFiveChargeToTopOfChargeIrDrop = 'AVERAGE_LATEST_FIVE_CHARGE_TO_TOP_OF_CHARGE_IR_DROP',
  AverageLatestFiveTopOfChargeToDischargeIrDrop = 'AVERAGE_LATEST_FIVE_TOP_OF_CHARGE_TO_DISCHARGE_IR_DROP',
  AverageLatestFiveEnergyEfficiencyAll = 'AVERAGE_LATEST_FIVE_ENERGY_EFFICIENCY_ALL',
  AverageLatestFiveEnergyEfficiencyMain = 'AVERAGE_LATEST_FIVE_ENERGY_EFFICIENCY_MAIN',
  AverageLatestFiveFinalChargeVoltage = 'AVERAGE_LATEST_FIVE_FINAL_CHARGE_VOLTAGE',
  AverageLatestFiveInitialDischargeVoltage = 'AVERAGE_LATEST_FIVE_INITIAL_DISCHARGE_VOLTAGE',
  AverageLatestFiveStepCount = 'AVERAGE_LATEST_FIVE_STEP_COUNT',
  AverageLatestFiveTopOfChargeRestTime = 'AVERAGE_LATEST_FIVE_TOP_OF_CHARGE_REST_TIME',
  AverageLatestFiveAvTemperatureMeasured = 'AVERAGE_LATEST_FIVE_AV_TEMPERATURE_MEASURED',
  AverageLatestFiveTemperatureMeasuredStdDeviation = 'AVERAGE_LATEST_FIVE_TEMPERATURE_MEASURED_STD_DEVIATION',
  LabTestProcessTag = 'LAB_TEST_PROCESS_TAG',
  LabTestProcessReasonForTestEnd = 'LAB_TEST_PROCESS_REASON_FOR_TEST_END',
  AdhesiveRecipeName = 'ADHESIVE_RECIPE_NAME',
  FeltTypeName = 'FELT_TYPE_NAME',
  FeltTypeVendorName = 'FELT_TYPE_VENDOR_NAME',
  GlueLot = 'GLUE_LOT',
  GlueVolumeMl = 'GLUE_VOLUME_ML',
  ElectrodeAssemblyVendorUsed = 'ELECTRODE_ASSEMBLY_VENDOR_USED',
  FeltLotOrPo = 'FELT_LOT_OR_PO',
  PlateIdNegative = 'PLATE_ID_NEGATIVE',
  PlateIdPositive = 'PLATE_ID_POSITIVE',
  FeltWeight = 'FELT_WEIGHT',
  FeltThickness = 'FELT_THICKNESS',
  AnodeName = 'ANODE_NAME',
  AnodeFiredAt = 'ANODE_FIRED_AT',
  AnodeRoughnessAfterFiring = 'ANODE_ROUGHNESS_AFTER_FIRING',
  CathodeName = 'CATHODE_NAME',
  CathodeFiredAt = 'CATHODE_FIRED_AT',
  CathodeRoughnessAfterFiring = 'CATHODE_ROUGHNESS_AFTER_FIRING',
  FurnaceVendorName = 'FURNACE_VENDOR_NAME',
  FurnaceAnodeVendorName = 'FURNACE_ANODE_VENDOR_NAME',
  FurnaceCathodeVendorName = 'FURNACE_CATHODE_VENDOR_NAME',
  AnodeFurnaceName = 'ANODE_FURNACE_NAME',
  CathodeFurnaceName = 'CATHODE_FURNACE_NAME',
  AnodePlateProcessAttrPress = 'ANODE_PLATE_PROCESS_ATTR_PRESS',
  AnodePlateProcessAttrMoldDesign = 'ANODE_PLATE_PROCESS_ATTR_MOLD_DESIGN',
  AnodePlateProcessAttrUpperMoldBlock = 'ANODE_PLATE_PROCESS_ATTR_UPPER_MOLD_BLOCK',
  AnodePlateProcessAttrLowerMoldBlock = 'ANODE_PLATE_PROCESS_ATTR_LOWER_MOLD_BLOCK',
  AnodePlateProcessAttrPlasticInput = 'ANODE_PLATE_PROCESS_ATTR_PLASTIC_INPUT',
  AnodePlateProcessAttrAggregatorInput = 'ANODE_PLATE_PROCESS_ATTR_AGGREGATOR_INPUT',
  AnodePlateProcessAttrTexturingInterleaf = 'ANODE_PLATE_PROCESS_ATTR_TEXTURING_INTERLEAF',
  AnodePlateProcessAttrCooling = 'ANODE_PLATE_PROCESS_ATTR_COOLING',
  AnodePlateProcessAttrPostProcess = 'ANODE_PLATE_PROCESS_ATTR_POST_PROCESS',
  CathodePlateProcessAttrPress = 'CATHODE_PLATE_PROCESS_ATTR_PRESS',
  CathodePlateProcessAttrMoldDesign = 'CATHODE_PLATE_PROCESS_ATTR_MOLD_DESIGN',
  CathodePlateProcessAttrUpperMoldBlock = 'CATHODE_PLATE_PROCESS_ATTR_UPPER_MOLD_BLOCK',
  CathodePlateProcessAttrLowerMoldBlock = 'CATHODE_PLATE_PROCESS_ATTR_LOWER_MOLD_BLOCK',
  CathodePlateProcessAttrPlasticInput = 'CATHODE_PLATE_PROCESS_ATTR_PLASTIC_INPUT',
  CathodePlateProcessAttrAggregatorInput = 'CATHODE_PLATE_PROCESS_ATTR_AGGREGATOR_INPUT',
  CathodePlateProcessAttrTexturingInterleaf = 'CATHODE_PLATE_PROCESS_ATTR_TEXTURING_INTERLEAF',
  CathodePlateProcessAttrCooling = 'CATHODE_PLATE_PROCESS_ATTR_COOLING',
  CathodePlateProcessAttrPostProcess = 'CATHODE_PLATE_PROCESS_ATTR_POST_PROCESS',
  PuckDesignUsed = 'PUCK_DESIGN_USED',
  TiPlatePostFireAlconoxWashed = 'TI_PLATE_POST_FIRE_ALCONOX_WASHED',
  ORingLot = 'O_RING_LOT',
  ORingManufacturerName = 'O_RING_MANUFACTURER_NAME',
  FrameTypeVendorName = 'FRAME_TYPE_VENDOR_NAME',
  FrameTypeFrameThickness = 'FRAME_TYPE_FRAME_THICKNESS',
  CathodeWeightBeforeFeltTrimming = 'CATHODE_WEIGHT_BEFORE_FELT_TRIMMING',
  CathodeWeightAfterFeltTreatment = 'CATHODE_WEIGHT_AFTER_FELT_TREATMENT',
  FeltShavedAndClipped = 'FELT_SHAVED_AND_CLIPPED',
  FeltVacuumed = 'FELT_VACUUMED',
  FeltTreated = 'FELT_TREATED',
  HexNutCount = 'HEX_NUT_COUNT',
  ToothLockWasherCount = 'TOOTH_LOCK_WASHER_COUNT',
  FlatWasherCount = 'FLAT_WASHER_COUNT',
  VisualQcTestPassed = 'VISUAL_QC_TEST_PASSED',
  HiPotTestPassed = 'HI_POT_TEST_PASSED',
  TorqueTestPassed = 'TORQUE_TEST_PASSED',
  PressureDecayTestPassed = 'PRESSURE_DECAY_TEST_PASSED',
  HeliumLeakTestPassed = 'HELIUM_LEAK_TEST_PASSED',
  ElectrolyteBatchId = 'ELECTROLYTE_BATCH_ID',
  ElectrolytePh = 'ELECTROLYTE_PH',
  ElectrolyteConductivityMsCm = 'ELECTROLYTE_CONDUCTIVITY_MS_CM',
  ElectrolyteDensity = 'ELECTROLYTE_DENSITY',
  DryBatteryWeightKg = 'DRY_BATTERY_WEIGHT_KG',
  WetBatteryWeightKg = 'WET_BATTERY_WEIGHT_KG',
  ElectrolyteMassKg = 'ELECTROLYTE_MASS_KG',
  ElectrolyteVolumeMl = 'ELECTROLYTE_VOLUME_ML',
  WetBatteryTestOcvVoltageV = 'WET_BATTERY_TEST_OCV_VOLTAGE_V',
  BatteryContinuityTestPassed = 'BATTERY_CONTINUITY_TEST_PASSED',
  LabTestOcvVoltageV = 'LAB_TEST_OCV_VOLTAGE_V',
  OhmResistanceMilliOhms = 'OHM_RESISTANCE_MILLI_OHMS',
  FaAutopsyOcvVoltageV = 'FA_AUTOPSY_OCV_VOLTAGE_V',
  EisMachine = 'EIS_MACHINE',
  BatteryMassKg = 'BATTERY_MASS_KG',
  FaAutopsyElectrolyteVolumeMl = 'FA_AUTOPSY_ELECTROLYTE_VOLUME_ML',
  ElectrolyteColor = 'ELECTROLYTE_COLOR',
  FeltAdhesiveQuality = 'FELT_ADHESIVE_QUALITY',
  FaAutopsySample = 'FA_AUTOPSY_SAMPLE',
  FaAutopsyCompletedAt = 'FA_AUTOPSY_COMPLETED_AT'
}

/** An individual test cycle run on a single battery */
export type BatteryTestCycle = {
  __typename?: 'BatteryTestCycle';
  id: Scalars['ID'];
  /** The battery being tested */
  batterySerialNumber: Scalars['String'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batteryBuildMatrix: BatteryBuildMatrix;
  /**
   * The cycle index for this battery
   * @deprecated Use camel-case variant
   */
  cycle_index?: Maybe<Scalars['Int']>;
  cycleIndex?: Maybe<Scalars['Int']>;
  /**
   * When this cycle started
   * @deprecated Use camel-case variant
   */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  ended_at?: Maybe<Scalars['Timestamp']>;
  endedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Field no longer supported */
  confidence?: Maybe<Scalars['Float']>;
  /**
   * inputs begin
   * @deprecated Use camel-case variant
   */
  step_count?: Maybe<Scalars['Int']>;
  stepCount?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  top_of_charge_rest_time?: Maybe<Scalars['Int']>;
  topOfChargeRestTime?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  bottom_of_discharge_rest_time?: Maybe<Scalars['Int']>;
  bottomOfDischargeRestTime?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  charge_capacity_all?: Maybe<Scalars['Float']>;
  chargeCapacityAll?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  charge_energy_all?: Maybe<Scalars['Float']>;
  chargeEnergyAll?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  charge_time_all?: Maybe<Scalars['Int']>;
  chargeTimeAll?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  charge_capacity_main?: Maybe<Scalars['Float']>;
  chargeCapacityMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  charge_energy_main?: Maybe<Scalars['Float']>;
  chargeEnergyMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  charge_time_main?: Maybe<Scalars['Int']>;
  chargeTimeMain?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  charge_power_main?: Maybe<Scalars['Float']>;
  chargePowerMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  charge_power_secondary?: Maybe<Scalars['Float']>;
  chargePowerSecondary?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  discharge_capacity_all?: Maybe<Scalars['Float']>;
  dischargeCapacityAll?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  discharge_energy_all?: Maybe<Scalars['Float']>;
  dischargeEnergyAll?: Maybe<Scalars['Float']>;
  /**
   * Hours
   * @deprecated Use camel-case variant
   */
  discharge_time_all?: Maybe<Scalars['Float']>;
  /** Hours */
  dischargeTimeAll?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  discharge_capacity_main?: Maybe<Scalars['Float']>;
  dischargeCapacityMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  discharge_energy_main?: Maybe<Scalars['Float']>;
  dischargeEnergyMain?: Maybe<Scalars['Float']>;
  /**
   * Hours
   * @deprecated Use camel-case variant
   */
  discharge_time_main?: Maybe<Scalars['Float']>;
  dischargeTimeMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  discharge_power_main?: Maybe<Scalars['Float']>;
  dischargePowerMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  discharge_power_secondary?: Maybe<Scalars['Float']>;
  dischargePowerSecondary?: Maybe<Scalars['Float']>;
  /**
   * common outputs begin
   * @deprecated Use camel-case variant
   */
  av_charge_voltage?: Maybe<Scalars['Float']>;
  avChargeVoltage?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  av_discharge_voltage?: Maybe<Scalars['Float']>;
  avDischargeVoltage?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  energy_efficiency_all?: Maybe<Scalars['Float']>;
  energyEfficiencyAll?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  coulombic_efficiency_all?: Maybe<Scalars['Float']>;
  coulombicEfficiencyAll?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  energy_efficiency_main?: Maybe<Scalars['Float']>;
  energyEfficiencyMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  coulombic_efficiency_main?: Maybe<Scalars['Float']>;
  coulombicEfficiencyMain?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  final_charge_voltage?: Maybe<Scalars['Float']>;
  finalChargeVoltage?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  initial_discharge_voltage?: Maybe<Scalars['Float']>;
  initialDischargeVoltage?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  charge_to_top_of_charge_ir_drop?: Maybe<Scalars['Float']>;
  chargeToTopOfChargeIrDrop?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  top_of_charge_to_discharge_ir_drop?: Maybe<Scalars['Float']>;
  topOfChargeToDischargeIrDrop?: Maybe<Scalars['Float']>;
  /** @deprecated Field no longer supported */
  av_temperature_measured?: Maybe<Scalars['Float']>;
  /** @deprecated Field no longer supported */
  temperature_measured_std_deviation?: Maybe<Scalars['Float']>;
  /**
   * Data points for this cycle; not provided when this cycle is an average
   * @deprecated Use camel-case variant
   */
  time_series?: Maybe<BatteryTestCycleTimeSeriesData>;
  timeSeries?: Maybe<BatteryTestCycleTimeSeriesData>;
};

/** The typed result of invoking the BatteryTestCycle `query` engine */
export type BatteryTestCycleQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestCycleQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryTestCycle>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryTestCycleTimeSeriesData = {
  __typename?: 'BatteryTestCycleTimeSeriesData';
  /** EPOCH time, in seconds */
  timestamps?: Maybe<Array<Maybe<Scalars['Timestamp']>>>;
  power?: Maybe<Array<Maybe<Scalars['Float']>>>;
  voltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  current?: Maybe<Array<Maybe<Scalars['Float']>>>;
  temperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  cycleIndex?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dataPoint?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dischargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  stepIndex?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stepTime?: Maybe<Array<Maybe<Scalars['Float']>>>;
  testTime?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type BatteryTestGroup = {
  __typename?: 'BatteryTestGroup';
  /** The test results of each battery in the group */
  batteries: Array<BatteryTest>;
  /** The best test result of batteries in the group */
  best_battery?: Maybe<BatteryTest>;
  /** The averages of batteries in this group */
  average_battery?: Maybe<OldBatteryTest>;
  /** number of batteries with notes */
  batteriesWithNotes?: Maybe<Scalars['Int']>;
};

export type BatteryTestMetadata = {
  __typename?: 'BatteryTestMetadata';
  id: Scalars['ID'];
  batterySerialNumber: Scalars['String'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batteryBuildMatrix: BatteryBuildMatrix;
  /** @deprecated Use camel-case variant */
  started_at: Scalars['Timestamp'];
  startedAt: Scalars['Timestamp'];
  /** @deprecated Use camel-case variant */
  ended_at?: Maybe<Scalars['Timestamp']>;
  endedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  test_id?: Maybe<Scalars['Int']>;
  testId?: Maybe<Scalars['Int']>;
  channel?: Maybe<Scalars['String']>;
  cycler?: Maybe<Scalars['String']>;
  cycleStartIndex?: Maybe<Scalars['Int']>;
  cycleEndIndex?: Maybe<Scalars['Int']>;
};

/** The typed result of invoking the BatteryTestMetadata query engine */
export type BatteryTestMetadataQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestMetadataQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestMetadata>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of invoking the BatteryTest query engine */
export type BatteryTestQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTest>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryTestsByCellType = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByCellType';
  cellTypeName: Scalars['String'];
  cellType: CellType;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BatteryTestsByCellType query engine */
export type BatteryTestsByCellTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByCellTypeQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByCellType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryTestsByCyclingProgram = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByCyclingProgram';
  cyclingProgramId: Scalars['ID'];
  cyclingProgram: CyclingProgram;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BatteryTestsByCyclingProgram query engine */
export type BatteryTestsByCyclingProgramQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByCyclingProgramQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByCyclingProgram>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryTestsByElectrolyteRecipe = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByElectrolyteRecipe';
  electrolyteRecipeId: Scalars['ID'];
  electrolyteRecipe: ElectrolyteRecipe;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BatteryTestsByElectrolyteRecipe query engine */
export type BatteryTestsByElectrolyteRecipeQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByElectrolyteRecipeQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByElectrolyteRecipe>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of querying for battery tests and grouping their results by a common Experiment */
export type BatteryTestsByExperiment = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByExperiment';
  experimentId: Scalars['ID'];
  experiment: Experiment;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

export type BatteryTestsByExperimentAndPopulation = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByExperimentAndPopulation';
  experimentId: Scalars['ID'];
  experiment: Experiment;
  populationId: Scalars['ID'];
  population: BatteryPopulation;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BatteryTestsByExperimentAndPopulation query engine */
export type BatteryTestsByExperimentAndPopulationQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByExperimentAndPopulationQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByExperimentAndPopulation>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of invoking the BatteryTestsByExperiment query engine */
export type BatteryTestsByExperimentQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByExperimentQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByExperiment>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryTestsByFeltType = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByFeltType';
  feltTypeId: Scalars['ID'];
  feltType: FeltType;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BatteryTestsByFeltType query engine */
export type BatteryTestsByFeltTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByFeltTypeQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByFeltType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryTestsByPopulation = GroupedBatteryTests & {
  __typename?: 'BatteryTestsByPopulation';
  populationId: Scalars['ID'];
  population: BatteryPopulation;
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BatteryTestsByPopulation query engine */
export type BatteryTestsByPopulationQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryTestsByPopulationQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<BatteryTestsByPopulation>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BatteryView = {
  __typename?: 'BatteryView';
  id: Scalars['ID'];
  serialNumber?: Maybe<Scalars['String']>;
  assemblyLine?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  statusName?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  stageName?: Maybe<Scalars['String']>;
  useCase?: Maybe<Scalars['String']>;
  useCaseName?: Maybe<Scalars['String']>;
  containerSerialNumber?: Maybe<Scalars['String']>;
  lastUpdatedAt?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  isUl?: Maybe<Scalars['Boolean']>;
  isFormed?: Maybe<Scalars['Boolean']>;
  formedCounts?: Maybe<Scalars['Int']>;
  /** rework instruction */
  reworkInstruction?: Maybe<BatteryCommentsView>;
  /** Approved */
  batteryApprovedComments?: Maybe<BatteryCommentsView>;
  /** Welding station */
  weldingStationVersionsBySerialNumber: Array<StationVersions>;
  weldingStationSummaryBySerialNumberAndVersion?: Maybe<WeldingStationSummaryOutput>;
  weldingStationSummary: WeldingStationSummaryOutput;
  weldingStationAutoResults?: Maybe<WeldingStationAutoOutput>;
  welderLine?: Maybe<Scalars['String']>;
  welderLineID: Scalars['ID'];
  batteryWeldingStationSubmittable: Scalars['Boolean'];
  /** Weighing Station */
  viewWeighingBusBarSummary?: Maybe<WeighingBusBarOutput>;
  viewWeighingGasChannelSummary?: Maybe<WeighingGasChannelOutput>;
  viewWeighingMeasureSummary?: Maybe<WeighingMeasureOutput>;
  viewWeighingReworkInstruction?: Maybe<BatteryCommentsView>;
  /** @deprecated  Use weighingStationVersions */
  weighingStationVersionsBySerialNumber: Array<Versions>;
  weighingStationVersions: Array<Versions>;
  /** @deprecated  Use weighingStationDetailsByVersion */
  weighingStationSummaryBySerialNumberAndVersion?: Maybe<WeighingStationSummary>;
  weighingStationDetailsByVersion?: Maybe<WeighingStationSummary>;
  batteryWeighingStationSubmittable: WeighingValidation;
  /** Finalization Station */
  getFinalizationGasChannelCover?: Maybe<GasChannelCoverOutput>;
  getFinalizationOverChargeKit?: Maybe<OverChargeKitOutput>;
  getFinalizationMmb?: Maybe<MmbOutput>;
  getFinalizationFinalChecks?: Maybe<FinalChecksOutput>;
  getFinalizationReworkInstruction?: Maybe<BatteryCommentsView>;
  /** @deprecated Use finalizationStationVersions */
  finalizationStationVersionsBySerialNumber: Array<Versions>;
  finalizationStationVersions: Array<Versions>;
  /** @deprecated Use finalizationDetailsByVersion */
  getFinalizationSummaryBySerialNumberAndVersion?: Maybe<FinalizationStationSummary>;
  finalizationDetailsByVersion?: Maybe<FinalizationStationSummary>;
  batteryFinalizationStationSubmittable: FinalizationValidation;
  /** Hipot Station */
  getHipotStationVersions: Array<StationVersions>;
  getHipotStationTestBySerialNumberAndVersion?: Maybe<HipotStationOuput>;
  getBoxPressureDecayBySerialNumberAndVersion?: Maybe<HipotStationBoxPressure>;
  getCellPressureDecayBySerialNumberAndVersion: Array<HipotStationCellPressure>;
  /** EIS station */
  getEisStationVersions: Array<StationVersions>;
  getEisStationBySerialNumberAndVersion?: Maybe<EisStation>;
  /** ELectrolyte Fill Station */
  getElectrolyteFillStationVersions: Array<StationVersions>;
  getElectrolyteFillStationBySerialNumberAndVersion?: Maybe<ElectrolyteFillStation>;
  /** Filling Station */
  getFillingOpd?: Maybe<FillingOpdOutput>;
  getFillingC2Cpd?: Maybe<FillingCellPressureOutput>;
  getFillingHipot?: Maybe<FillingHipotOutput>;
  getFillingEis?: Maybe<FillingEisOutput>;
  getFillingWeighing?: Maybe<FillingWeighingOutput>;
  getFillingElectrolyte?: Maybe<FillingElectrolyteOutput>;
  /** @deprecated Use fillingStationVersions */
  fillingStationVersionsBySerialNumber: Array<Versions>;
  fillingStationVersions: Array<Versions>;
  /** @deprecated Use fillingStationDetailsByVersion */
  fillingStationSummaryBySerialNumberAndVersion?: Maybe<FillingStationSummary>;
  fillingStationDetailsByVersion?: Maybe<FillingStationSummary>;
  getFillingReworkInstruction?: Maybe<BatteryCommentsView>;
  batteryFillingStationSubmittable?: Maybe<FillingValidation>;
  /** Fetch */
  fetchFillingC2Cpd?: Maybe<Array<Maybe<CellPressureDecayOutputs>>>;
  fetchFillingWeighing?: Maybe<FillingWeighingOutput>;
  fetchFillingElectrolyte?: Maybe<Array<Maybe<ElectrolyteCellsOutput>>>;
  fetchFillingOpd?: Maybe<FillingOpdDetailsOutput>;
  getNcrCodes?: Maybe<Array<Maybe<ValidationRangesView>>>;
};


export type BatteryViewWeldingStationSummaryBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewWeighingStationSummaryBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewWeighingStationDetailsByVersionArgs = {
  version?: Maybe<Scalars['Int']>;
};


export type BatteryViewGetFinalizationSummaryBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewFinalizationDetailsByVersionArgs = {
  version?: Maybe<Scalars['Int']>;
};


export type BatteryViewGetHipotStationTestBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewGetBoxPressureDecayBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewGetCellPressureDecayBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewGetEisStationBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewGetElectrolyteFillStationBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewFillingStationSummaryBySerialNumberAndVersionArgs = {
  version: Scalars['Int'];
};


export type BatteryViewFillingStationDetailsByVersionArgs = {
  version?: Maybe<Scalars['Int']>;
};

export type BatteryViewQueryEngineResult = QueryEngineResult & {
  __typename?: 'BatteryViewQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BatteryView>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BlockAlertAggregate = {
  __typename?: 'BlockAlertAggregate';
  id: Scalars['ID'];
  eosBlockId: Scalars['ID'];
  blockId: Scalars['ID'];
  eventAt: Scalars['Timestamp'];
  eventValue: Scalars['String'];
  eosSubgroupId: Scalars['String'];
  subgroupId: Scalars['ID'];
  severity: Scalars['String'];
  durationMs: Scalars['Int'];
  /** true = state went to high, false = state went to low */
  eventStateSet: Scalars['Boolean'];
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BlockAlertAggregateByBlockQueryEngineResult = {
  __typename?: 'BlockAlertAggregateByBlockQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockAlertAggregateByBlockRow>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BlockAlertAggregateByBlockRow = {
  __typename?: 'BlockAlertAggregateByBlockRow';
  eosBlockId: Scalars['ID'];
  blockId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

export type BlockAlertAggregateBySeverity = {
  __typename?: 'BlockAlertAggregateBySeverity';
  severity: Scalars['String'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BlockAlertAggregateBySeverityQueryEngineResult = {
  __typename?: 'BlockAlertAggregateBySeverityQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockAlertAggregateBySeverity>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BlockAlertAggregateBySubgroup = {
  __typename?: 'BlockAlertAggregateBySubgroup';
  eosSubgroupId: Scalars['String'];
  subgroupId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BlockAlertAggregateBySubgroupQueryEngineResult = {
  __typename?: 'BlockAlertAggregateBySubgroupQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockAlertAggregateBySubgroup>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BlockAlertAggregateQueryEngineResult = {
  __typename?: 'BlockAlertAggregateQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockAlertAggregate>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BlockAlertEvent = {
  __typename?: 'BlockAlertEvent';
  id: Scalars['ID'];
  blockId: Scalars['ID'];
  block: BlockInst;
  eventAt: Scalars['Timestamp'];
  eventValue: Scalars['String'];
  eventTypeId: Scalars['ID'];
  eventType: AlertEventType;
  /** true = state went to high, false = state went to low */
  eventStateSet: Scalars['Boolean'];
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type BlockAlertEventQueryEngineResult = {
  __typename?: 'BlockAlertEventQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockAlertEvent>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  timeZone?: Maybe<Scalars['String']>;
};

export type BlockDataset = Dataset & {
  __typename?: 'BlockDataset';
  data?: Maybe<BlockTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type BlockInst = {
  __typename?: 'BlockInst';
  id: Scalars['ID'];
  eosBlockId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subgroupId: Scalars['ID'];
  isActive: Scalars['Boolean'];
  subgroup: SubgroupInst;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  restCurrent?: Maybe<Scalars['Float']>;
  energyRating?: Maybe<Scalars['Float']>;
  powerRating?: Maybe<Scalars['Float']>;
  controlCabinetSerialNumber?: Maybe<Scalars['String']>;
  controlBoardSerialNumber?: Maybe<Scalars['String']>;
  productOptionCode?: Maybe<Scalars['String']>;
  controlBoardSoftwareRevision?: Maybe<Scalars['String']>;
  alertCount: AlertCountResponse;
  latestCycleIndex?: Maybe<Scalars['Int']>;
  alertTimeSeries: AlertDataset;
  timeSeries: BlockDataset;
  stringTimeSeries?: Maybe<Array<StringDataset>>;
  stringMetadataTimeSeries?: Maybe<Array<StringMetadataDataset>>;
  metadataTimeSeries: BlockMetadataDataset;
  strings: StringInstQueryEngineResult;
  /** number of stack installations in block */
  stackCount?: Maybe<Scalars['Int']>;
  /** number of string installations in block */
  stringCount?: Maybe<Scalars['Int']>;
  /** number of battery installations in block */
  batteryCount?: Maybe<Scalars['Int']>;
  installationAddress: Scalars['String'];
  chargeStatus?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
};


export type BlockInstAlertTimeSeriesArgs = {
  filtering?: Maybe<FilterInput>;
};


export type BlockInstTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstStringTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstStringMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstStringsArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};

export type BlockInstCycleStats = {
  __typename?: 'BlockInstCycleStats';
  id: Scalars['ID'];
  blockId: Scalars['ID'];
  cycleStartedAt?: Maybe<Scalars['Timestamp']>;
  cycleEndedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleStartedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleEndedAt?: Maybe<Scalars['Timestamp']>;
  avChargeVoltage?: Maybe<Scalars['Float']>;
  avDischargeVoltage?: Maybe<Scalars['Float']>;
  bodRestTime?: Maybe<Scalars['Float']>;
  chargeCapacityAll?: Maybe<Scalars['Float']>;
  chargeCapacityMain?: Maybe<Scalars['Float']>;
  chargeEnergyAll?: Maybe<Scalars['Float']>;
  chargeEnergyMain?: Maybe<Scalars['Float']>;
  chargePowerMain?: Maybe<Scalars['Float']>;
  chargePowerSecondary?: Maybe<Scalars['Float']>;
  chargeTimeAll?: Maybe<Scalars['Float']>;
  chargeTimeMain?: Maybe<Scalars['Float']>;
  coulombicEfficiencyAll?: Maybe<Scalars['Float']>;
  coulombicEfficiencyMain?: Maybe<Scalars['Float']>;
  dischargeCapacityAll?: Maybe<Scalars['Float']>;
  dischargeCapacityMain?: Maybe<Scalars['Float']>;
  dischargeEnergyAll?: Maybe<Scalars['Float']>;
  dischargeEnergyMain?: Maybe<Scalars['Float']>;
  dischargePowerMain?: Maybe<Scalars['Float']>;
  dischargePowerSecondary?: Maybe<Scalars['Float']>;
  dischargeTimeAll?: Maybe<Scalars['Float']>;
  dischargeTimeMain?: Maybe<Scalars['Float']>;
  energyEfficiencyAll?: Maybe<Scalars['Float']>;
  energyEfficiencyMain?: Maybe<Scalars['Float']>;
  startIndex?: Maybe<Scalars['Int']>;
  stepCount?: Maybe<Scalars['Int']>;
  tocRestTime?: Maybe<Scalars['Float']>;
  cycle?: Maybe<Scalars['Int']>;
  block: BlockInst;
  minTemp?: Maybe<Scalars['Float']>;
  maxTemp?: Maybe<Scalars['Float']>;
  avgTemp?: Maybe<Scalars['Float']>;
  systemChargeTime?: Maybe<Scalars['Int']>;
  systemPrimaryDischargeTime?: Maybe<Scalars['Int']>;
  systemSecondaryDischargeTime?: Maybe<Scalars['Int']>;
  systemPrimaryDischargeEnergy?: Maybe<Scalars['Float']>;
  systemSecondaryDischargeEnergy?: Maybe<Scalars['Float']>;
  systemChargeEnergy?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiency?: Maybe<Scalars['Float']>;
  systemTotalEfficiency?: Maybe<Scalars['Float']>;
  systemAvChargePower?: Maybe<Scalars['Float']>;
  systemAvPrimaryDischargePower?: Maybe<Scalars['Float']>;
  systemAvSecondaryDischargePower?: Maybe<Scalars['Float']>;
  systemTotalDischargeTime?: Maybe<Scalars['Int']>;
  systemAvTotalDischargePower?: Maybe<Scalars['Float']>;
  systemCoulombicEfficiency?: Maybe<Scalars['Float']>;
  systemTotalDischargeEnergy?: Maybe<Scalars['Float']>;
  systemCycleCount?: Maybe<Scalars['Float']>;
  systemCycleCountLifetime?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyLifetime?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyLifetime?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacity?: Maybe<Scalars['Float']>;
  systemStatelessChargeTime?: Maybe<Scalars['Int']>;
  systemStatelessChargeEnergy?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacity?: Maybe<Scalars['Float']>;
  systemStatelessDischargeTime?: Maybe<Scalars['Int']>;
  systemStatelessDischargeEnergy?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePower?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePower?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiency?: Maybe<Scalars['Float']>;
  systemStatelessAvChargeEnergyPerString?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargeEnergyPerString?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiency?: Maybe<Scalars['Float']>;
  avgSiteAmbientTemp?: Maybe<Scalars['Float']>;
  maxSiteAmbientTemp?: Maybe<Scalars['Float']>;
  minSiteAmbientTemp?: Maybe<Scalars['Float']>;
  systemMaxSoc?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the SiteInst query engine */
export type BlockInstCycleStatsQueryEngineResult = {
  __typename?: 'BlockInstCycleStatsQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockInstCycleStats>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  csvDownloadPath?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  zoneId?: Maybe<Scalars['String']>;
};

export type BlockInstInput = {
  eosBlockId?: Maybe<Scalars['String']>;
  controlCabinetSerialNumber?: Maybe<Scalars['String']>;
  /**
   * controlBoardSerialNumber : String
   * controlBoardSoftwareRevision : String
   */
  name?: Maybe<Scalars['String']>;
  /** description : String */
  subgroupId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  powerRating?: Maybe<Scalars['Float']>;
  energyRating?: Maybe<Scalars['Float']>;
  productOptionCode?: Maybe<Scalars['String']>;
  restCurrent?: Maybe<Scalars['Float']>;
  historicalLifetimeChargeEnergy?: Maybe<Scalars['Float']>;
  historicalLifetimeDischargeEnergy?: Maybe<Scalars['Float']>;
};

export type BlockInstView = {
  __typename?: 'BlockInstView';
  id: Scalars['ID'];
  eosBlockId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  subgroupId: Scalars['ID'];
  isActive: Scalars['Boolean'];
  subgroup: SubgroupInst;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  restCurrent?: Maybe<Scalars['Float']>;
  energyRating?: Maybe<Scalars['Float']>;
  powerRating?: Maybe<Scalars['Float']>;
  controlCabinetSerialNumber?: Maybe<Scalars['String']>;
  controlBoardSerialNumber?: Maybe<Scalars['String']>;
  productOptionCode?: Maybe<Scalars['String']>;
  controlBoardSoftwareRevision?: Maybe<Scalars['String']>;
  alertCount: AlertCountResponse;
  cycleStats?: Maybe<Array<BlockInstCycleStats>>;
  latestCycleStats?: Maybe<BlockInstCycleStats>;
  alertTimeSeries: AlertDataset;
  timeSeries: BlockDataset;
  metadataTimeSeries: BlockMetadataDataset;
  stringTimeSeries?: Maybe<Array<StringDataset>>;
  stringMetadataTimeSeries?: Maybe<Array<StringMetadataDataset>>;
  strings: StringInstViewQueryEngineResult;
  /**
   *  combination of subgroup id and block id
   * subgroupBlock: String
   *  latest cycle index
   */
  latestCycleIndex?: Maybe<Scalars['Int']>;
  /** number of stack installations in block */
  stackCount?: Maybe<Scalars['Int']>;
  /** number of string installations in block */
  stringCount?: Maybe<Scalars['Int']>;
  /** number of battery installations in block */
  batteryCount?: Maybe<Scalars['Int']>;
  /** installation address */
  installationAddress: Scalars['String'];
  timeZone?: Maybe<Scalars['String']>;
  /** The URL for downloading the high fidelity CSV data from S3 */
  highFidelityDataPresignedURL?: Maybe<Scalars['String']>;
  reportChartURLs?: Maybe<BlockReports>;
};


export type BlockInstViewCycleStatsArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type BlockInstViewAlertTimeSeriesArgs = {
  filtering?: Maybe<FilterInput>;
};


export type BlockInstViewTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  ordering?: Maybe<OrderingInput>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstViewMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  ordering?: Maybe<OrderingInput>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstViewStringTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstViewStringMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type BlockInstViewStringsArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type BlockInstViewHighFidelityDataPresignedUrlArgs = {
  cycleStartedAt?: Maybe<Scalars['Timestamp']>;
};


export type BlockInstViewReportChartUrLsArgs = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
};

/**
 *  The typed result of invoking the BlockInst query engine
 * type BlockInstQueryEngineResult implements QueryEngineResult {
 *     # A list of objects that are filtered, sorted, and paginated according to the request's parameters
 *     results: [BlockInst!]!
 *     resultCount: Int!
 *     # The number of objects in the database that match the request's predicate
 *     totalCount: Int!
 * }
 *  The typed result of invoking the BlockInst query engine
 */
export type BlockInstViewQueryEngineResult = QueryEngineResult & {
  __typename?: 'BlockInstViewQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<BlockInstView>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type BlockMetadataDataset = Dataset & {
  __typename?: 'BlockMetadataDataset';
  data?: Maybe<BlockMetadataTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type BlockMetadataTimeSeries = Timeseries & {
  __typename?: 'BlockMetadataTimeSeries';
  blockName?: Maybe<Scalars['String']>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  chargePowerLimit: Array<Maybe<Scalars['Float']>>;
  disChargePowerLimit: Array<Maybe<Scalars['Float']>>;
  maxTempLimit: Array<Maybe<Scalars['Int']>>;
  minTempLimit: Array<Maybe<Scalars['Int']>>;
  stringEnableState: Array<Maybe<Scalars['Int']>>;
  sysStateOfCharge: Array<Maybe<Scalars['Float']>>;
  sysStateOfChargeMax: Array<Maybe<Scalars['Float']>>;
  sysStateOfChargeMin: Array<Maybe<Scalars['Float']>>;
  energy: Array<Maybe<Scalars['Float']>>;
  /**
   * The following attributes may not be required; CLEAN UP
   * calculated value from string metadata
   */
  stateOfCharge: Array<Maybe<Scalars['Float']>>;
  /** request with state of charge */
  stateOfChargeMax?: Maybe<Scalars['Float']>;
  /** request with state of charge */
  stateOfChargeMin?: Maybe<Scalars['Float']>;
};

export enum BlockReportStatus {
  Complete = 'COMPLETE',
  Processing = 'PROCESSING'
}

export type BlockReports = {
  __typename?: 'BlockReports';
  chartURLs?: Maybe<Array<Scalars['String']>>;
  reportNotes?: Maybe<Array<Scalars['String']>>;
  pdfURL?: Maybe<Scalars['String']>;
  status: BlockReportStatus;
};

export type BlockTimeSeries = Timeseries & {
  __typename?: 'BlockTimeSeries';
  blockName?: Maybe<Scalars['String']>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  contactors?: Maybe<Array<Maybe<Scalars['Int']>>>;
  cycleIndex?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dataPoint?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dateTime?: Maybe<Array<Maybe<Scalars['Timestamp']>>>;
  heartBeat?: Maybe<Array<Maybe<Scalars['Int']>>>;
  stepIndex?: Maybe<Array<Maybe<Scalars['Int']>>>;
  testTime?: Maybe<Array<Maybe<Scalars['Int']>>>;
  chargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  voltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  temperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
  current?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** bus voltage */
  averageStringVoltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** real power */
  instantaneousPower?: Maybe<Array<Maybe<Scalars['Float']>>>;
  sumOfStringCurrents?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type CellPressureDecayInputs = {
  cellNum: Scalars['Int'];
  leakRate?: Maybe<Scalars['Float']>;
};

export type CellPressureDecayOutputs = {
  __typename?: 'CellPressureDecayOutputs';
  cellNum?: Maybe<Scalars['Int']>;
  leakRate?: Maybe<Scalars['Float']>;
};

export type CellType = {
  __typename?: 'CellType';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
  cellCount?: Maybe<Scalars['Int']>;
};

/** The typed result of invoking the CellType query engine */
export type CellTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'CellTypeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<CellType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type CellTypeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  cellCount?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

/** TODO rename to AuditRecord */
export type ChangeAuditLog = {
  __typename?: 'ChangeAuditLog';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * When the change occurred
   * @deprecated Use camel-case variant
   */
  changed_at?: Maybe<Scalars['Timestamp']>;
  changedAt?: Maybe<Scalars['Timestamp']>;
  /** The user that issued the change */
  userId?: Maybe<Scalars['ID']>;
  user: User;
  /**
   * What type of change occurred
   * @deprecated Use camel-case variant
   */
  action_type?: Maybe<Scalars['String']>;
  actionType?: Maybe<Scalars['String']>;
  /**
   * What table was affected
   * @deprecated Use camel-case variant
   */
  table_name?: Maybe<Scalars['String']>;
  tableName?: Maybe<Scalars['String']>;
  /** Details about the modification; JSON */
  details?: Maybe<Scalars['String']>;
};

export type CollectionCard = {
  __typename?: 'CollectionCard';
  id?: Maybe<Scalars['ID']>;
  batteryCount?: Maybe<Scalars['Int']>;
};

export enum CollectionsScope {
  Owned = 'OWNED',
  Favorited = 'FAVORITED',
  Subscribed = 'SUBSCRIBED',
  Published = 'PUBLISHED'
}

export type ComponentLotCount = {
  __typename?: 'ComponentLotCount';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentLotOutput = {
  __typename?: 'ComponentLotOutput';
  lotNumber?: Maybe<Scalars['String']>;
  scanned?: Maybe<Scalars['Boolean']>;
  deviation?: Maybe<Scalars['String']>;
};

export enum ComponentType {
  TiPlate = 'TI_PLATE',
  CurrentAggregator = 'CURRENT_AGGREGATOR',
  WeldNut = 'WELD_NUT',
  Glue = 'GLUE',
  Felt = 'FELT',
  Frames = 'FRAMES',
  BusBar = 'BUS_BAR',
  Electrolyte = 'ELECTROLYTE',
  GasChannelCover = 'GAS_CHANNEL_COVER',
  UmbrellaValve = 'UMBRELLA_VALVE',
  Mmb = 'MMB',
  Prsv = 'PRSV',
  Resin = 'RESIN',
  Puck = 'PUCK',
  PositiveTerminal = 'POSITIVE_TERMINAL',
  NegativeTerminal = 'NEGATIVE_TERMINAL',
  TerminalFrame = 'TERMINAL_FRAME',
  NeutralFrame = 'NEUTRAL_FRAME',
  BipolarPlate = 'BIPOLAR_PLATE',
  Cables = 'CABLES',
  Nameplate = 'NAMEPLATE',
  UlOverChargeKitLot = 'UL_OVER_CHARGE_KIT_LOT',
  NonUlOverChargeKitLot = 'NON_UL_OVER_CHARGE_KIT_LOT'
}

export type CompositeMaterial = {
  __typename?: 'CompositeMaterial';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['Int']>;
  vendorInfo?: Maybe<Vendor>;
  form?: Maybe<Scalars['String']>;
  nominalThickness?: Maybe<Scalars['Float']>;
  isActive: Scalars['Boolean'];
};

export type CompositeMaterialQueryEngineResult = QueryEngineResult & {
  __typename?: 'CompositeMaterialQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<CompositeMaterial>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type CompositeMaterialUpdate = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['Int']>;
  form?: Maybe<Scalars['String']>;
  nominalThickness?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type Condition = {
  __typename?: 'Condition';
  property: Scalars['String'];
  operator: ConditionOperator;
  value?: Maybe<Scalars['String']>;
};

export type ConditionInput = {
  property: Scalars['String'];
  operator: ConditionOperator;
  value?: Maybe<Scalars['String']>;
};

export enum ConditionOperator {
  Eq = 'EQ',
  Neq = 'NEQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Like = 'LIKE',
  Ilike = 'ILIKE',
  IsNull = 'IS_NULL',
  IsNotNull = 'IS_NOT_NULL'
}

export type Constraint = {
  property: Scalars['String'];
  operator: ConstraintOperator;
  /** Value may be null if `operator` is `IS_NULL` or `IS_NOT_NULL` */
  value?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
};

export type ConstraintGroup = {
  operator: ConstraintGroupOperator;
  constraints?: Maybe<Array<Constraint>>;
  constraint_groups?: Maybe<Array<ConstraintGroup>>;
};

export enum ConstraintGroupOperator {
  /** Not sure about supporting this, because the resulting ConstraintGroup can only contain a single ConstraintGroup */
  Not = 'NOT',
  And = 'AND',
  Or = 'OR'
}

export enum ConstraintOperator {
  Eq = 'EQ',
  Neq = 'NEQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  IsNull = 'IS_NULL',
  IsNotNull = 'IS_NOT_NULL',
  Like = 'LIKE',
  Ilike = 'ILIKE'
}

export enum ContainerLocations {
  TestBay_1 = 'TEST_BAY_1',
  TestBay_2 = 'TEST_BAY_2',
  TestBay_3 = 'TEST_BAY_3',
  TestBay_4 = 'TEST_BAY_4',
  TestBay_5 = 'TEST_BAY_5',
  TestBay_6 = 'TEST_BAY_6',
  TestBay_7 = 'TEST_BAY_7',
  TestBay_8 = 'TEST_BAY_8'
}

export type ContainerSignOffFields = {
  containerSerialNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
};

export type ContainerValidation = {
  __typename?: 'ContainerValidation';
  isIqcInvalidated?: Maybe<Scalars['Boolean']>;
  isIqcCompleted?: Maybe<Scalars['Boolean']>;
  isModelOptionCompleted?: Maybe<Scalars['Boolean']>;
  isModelOptionInvalidated?: Maybe<Scalars['Boolean']>;
  isControllerCableCompleted?: Maybe<Scalars['Boolean']>;
  isControllerCableInvalidated?: Maybe<Scalars['Boolean']>;
  isStackAInvalidated?: Maybe<Scalars['Boolean']>;
  isStackACompleted?: Maybe<Scalars['Boolean']>;
  isStackBInvalidated?: Maybe<Scalars['Boolean']>;
  isStackBCompleted?: Maybe<Scalars['Boolean']>;
  isStackAQcInvalidated?: Maybe<Scalars['Boolean']>;
  isStackAQcCompleted?: Maybe<Scalars['Boolean']>;
  isStackBQcInvalidated?: Maybe<Scalars['Boolean']>;
  isStackBQcCompleted?: Maybe<Scalars['Boolean']>;
  isFatQcCompleted?: Maybe<Scalars['Boolean']>;
  isFatQcInvalidated?: Maybe<Scalars['Boolean']>;
  isOQcCompleted?: Maybe<Scalars['Boolean']>;
  isOQcInvalidated?: Maybe<Scalars['Boolean']>;
  isContainerSubmittable?: Maybe<Scalars['Boolean']>;
};

/** CONTAINER */
export type ContainerView = {
  __typename?: 'ContainerView';
  id: Scalars['ID'];
  serialNumber?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  statusName?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  stageName?: Maybe<Scalars['String']>;
  useCase?: Maybe<Scalars['String']>;
  useCaseName?: Maybe<Scalars['String']>;
  modelNumber?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  isUl?: Maybe<Scalars['Boolean']>;
  lastUpdatedAt?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  /** Iqc */
  iqc?: Maybe<IqcOutput>;
  /** Model Options */
  modelOptions?: Maybe<ModelOptionsOutput>;
  /** controllerCables */
  controllerCables?: Maybe<ControllerCablesOutput>;
  /** Stack A,B ( get details by passing STACK_A/STACK_B as an argument) */
  batteriesByStack?: Maybe<BatteriesInContainerOutput>;
  /** Stack QC A,B ( get QC details by passing STACK_A_QC/STACK_B_QC as an argument) */
  batteriesQcByStack?: Maybe<BatteriesQcInContainerOutput>;
  batteryQcDetailsByPosition?: Maybe<BatteryStackQcOutput>;
  batteryStackDetailsByPosition?: Maybe<BatteryStackOutput>;
  /** FAT QC */
  fatQc?: Maybe<FatQcOutput>;
  /** OQC */
  oqc?: Maybe<OqcOutput>;
  /** Validation */
  containerAssemblyStationSubmittable?: Maybe<ContainerValidation>;
};


/** CONTAINER */
export type ContainerViewBatteriesByStackArgs = {
  stack: Stack;
};


/** CONTAINER */
export type ContainerViewBatteriesQcByStackArgs = {
  stack: Stack;
};


/** CONTAINER */
export type ContainerViewBatteryQcDetailsByPositionArgs = {
  position: Scalars['String'];
  stack: Stack;
};


/** CONTAINER */
export type ContainerViewBatteryStackDetailsByPositionArgs = {
  position: Scalars['String'];
  stack: Stack;
};

export type ContainerViewQueryEngineResult = QueryEngineResult & {
  __typename?: 'ContainerViewQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<ContainerView>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** CONTAINER CONTROLER CABLE */
export type ControllerCablesInput = {
  containerSerialNumber: Scalars['String'];
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  stackA?: Maybe<Scalars['String']>;
  stackB?: Maybe<Scalars['String']>;
  cables?: Maybe<Array<Maybe<LotNumbersInput>>>;
};

export type ControllerCablesOutput = {
  __typename?: 'ControllerCablesOutput';
  containerSerialNumber: Scalars['String'];
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  stackA?: Maybe<Scalars['String']>;
  stackB?: Maybe<Scalars['String']>;
  cables?: Maybe<Array<Maybe<ComponentLotOutput>>>;
};

export type Cycler = {
  __typename?: 'Cycler';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** This cycler's name */
  name: Scalars['String'];
  manufacturerId?: Maybe<Scalars['ID']>;
  /** The vendor from which this was purchased */
  manufacturer?: Maybe<Vendor>;
  /**
   * The cycler's serial number
   * @deprecated Use camel-case variant
   */
  serial_number?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  channelCount?: Maybe<Scalars['Int']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  /** Precise decimal */
  maxVoltage?: Maybe<Scalars['String']>;
  /** Precise decimal */
  maxCurrent?: Maybe<Scalars['String']>;
};

export type CyclerChannel = {
  __typename?: 'CyclerChannel';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The cycler placed at this channel */
  cycler?: Maybe<Cycler>;
  /** The name of this channel */
  channel?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
};

/** TODO add mutation(s) for this type */
export type CyclerChannelAssignmentHistory = {
  __typename?: 'CyclerChannelAssignmentHistory';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery which was assigned to the corresponding cycler channel
   * @deprecated Use camel-case variant
   */
  battery_build_matrix?: Maybe<BatteryBuildMatrix>;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /**
   * When this battery was assigned
   * @deprecated Use camel-case variant
   */
  assigned_at?: Maybe<Scalars['Timestamp']>;
  assignedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * When this batter was unassigned
   * @deprecated Use camel-case variant
   */
  unassigned_at?: Maybe<Scalars['Timestamp']>;
  unassignedAt?: Maybe<Scalars['Timestamp']>;
  /** Comments about the un/assignment process */
  notes?: Maybe<Scalars['String']>;
  /**
   * The channel to which the battery was assigned
   * @deprecated Use camel-case variant
   */
  cycler_channel?: Maybe<CyclerChannel>;
  cyclerChannelId?: Maybe<Scalars['ID']>;
  cyclerChannel?: Maybe<CyclerChannel>;
};

/** The typed result of invoking the CyclerChannel query engine */
export type CyclerChannelQueryEngineResult = QueryEngineResult & {
  __typename?: 'CyclerChannelQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<CyclerChannel>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type CyclerChannelUpdate = {
  name: Scalars['String'];
  cyclerName?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

/** The typed result of invoking the Cycler query engine */
export type CyclerQueryEngineResult = QueryEngineResult & {
  __typename?: 'CyclerQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<Cycler>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type CyclerUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['ID']>;
  serialNumber?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /** Precise decimal */
  maxVoltage?: Maybe<Scalars['String']>;
  /** Precise decimal */
  maxCurrent?: Maybe<Scalars['String']>;
  channelCount?: Maybe<Scalars['Int']>;
};

export type CyclingProgram = {
  __typename?: 'CyclingProgram';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  charge_capacity_ah?: Maybe<Scalars['String']>;
  chargeCapacityAh?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  charge_rate_w?: Maybe<Scalars['String']>;
  chargeRateW?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  charge_voltage_cutoff_v?: Maybe<Scalars['String']>;
  chargeVoltageCutoffV?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  discharge_rate_w?: Maybe<Scalars['String']>;
  dischargeRateW?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  discharge_voltage_cutoff_v?: Maybe<Scalars['String']>;
  dischargeVoltageCutoffV?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  top_of_charge_rest_time_minutes?: Maybe<Scalars['String']>;
  topOfChargeRestTimeMinutes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  bottom_of_discharge_rest_time_minutes?: Maybe<Scalars['String']>;
  bottomOfDischargeRestTimeMinutes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  step_down_rate_w?: Maybe<Scalars['String']>;
  stepDownRateW?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  step_down_cutoff_v?: Maybe<Scalars['String']>;
  stepDownCutoffV?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  test_temperature_c?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  /** Comments about the program */
  notes?: Maybe<Scalars['String']>;
  /**
   * When this program was added to the database
   * @deprecated Use camel-case variant
   */
  created_at?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
};

/** The typed result of invoking the CyclingProgram query engine */
export type CyclingProgramQueryEngineResult = QueryEngineResult & {
  __typename?: 'CyclingProgramQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<CyclingProgram>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type CyclingProgramUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  chargeCapacityAh?: Maybe<Scalars['String']>;
  chargeRateW?: Maybe<Scalars['String']>;
  chargeVoltageCutoffV?: Maybe<Scalars['String']>;
  dischargeRateW?: Maybe<Scalars['String']>;
  dischargeVoltageCutoffV?: Maybe<Scalars['String']>;
  topOfChargeRestTimeMinutes?: Maybe<Scalars['String']>;
  bottomOfDischargeRestTimeMinutes?: Maybe<Scalars['String']>;
  stepDownRateW?: Maybe<Scalars['String']>;
  stepDownCutoffV?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type Dataset = {
  /** dataset min */
  start?: Maybe<Scalars['Timestamp']>;
  /** dataset max */
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

/** A group of users */
export type Department = {
  __typename?: 'Department';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The department's name */
  name?: Maybe<Scalars['String']>;
  /** The department's permissions */
  permissions: Array<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
};

/** The typed result of invoking the Department query engine */
export type DepartmentQueryEngineResult = QueryEngineResult & {
  __typename?: 'DepartmentQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<Department>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type DepartmentUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type DocIdMapping = {
  __typename?: 'DocIdMapping';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  doc_id?: Maybe<Scalars['String']>;
  docId?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  db_table?: Maybe<Scalars['String']>;
  dbTable?: Maybe<Scalars['String']>;
};

export type DryBatteryTestProcess = {
  __typename?: 'DryBatteryTestProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /** Precise decimal */
  length?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  visual_qc_test_passed?: Maybe<Scalars['Boolean']>;
  visualQcTestPassed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  visual_qc_test_failure_reason?: Maybe<Scalars['String']>;
  visualQcTestFailureReason?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  torque_test_passed?: Maybe<Scalars['Boolean']>;
  torqueTestPassed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  pressure_decay_test_passed?: Maybe<Scalars['Boolean']>;
  pressureDecayTestPassed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  helium_leak_test_passed?: Maybe<Scalars['Boolean']>;
  heliumLeakTestPassed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  hi_pot_test_passed?: Maybe<Scalars['Boolean']>;
  hiPotTestPassed?: Maybe<Scalars['Boolean']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  pressure_decay_psi?: Maybe<Scalars['String']>;
  pressureDecayPsi?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  helium_leak?: Maybe<Scalars['String']>;
  heliumLeak?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  hi_pot_voltage?: Maybe<Scalars['Int']>;
  hiPotVoltage?: Maybe<Scalars['Int']>;
  breakdown?: Maybe<Scalars['Boolean']>;
  viso?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  test_passed?: Maybe<Scalars['Boolean']>;
  testPassed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  tested_at?: Maybe<Scalars['Timestamp']>;
  testedAt?: Maybe<Scalars['Timestamp']>;
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
};

export type DryBatteryTestProcessUpdate = {
  battery_serial_number: Scalars['String'];
  /** Precise decimal */
  length?: Maybe<Scalars['String']>;
  visual_qc_test_passed?: Maybe<Scalars['Boolean']>;
  visual_qc_test_failure_reason?: Maybe<Scalars['String']>;
  torque_test_passed?: Maybe<Scalars['Boolean']>;
  pressure_decay_test_passed?: Maybe<Scalars['Boolean']>;
  helium_leak_test_passed?: Maybe<Scalars['Boolean']>;
  hi_pot_test_passed?: Maybe<Scalars['Boolean']>;
  /** Precise decimal */
  pressure_decay_psi?: Maybe<Scalars['String']>;
  helium_leak?: Maybe<Scalars['String']>;
  hi_pot_voltage?: Maybe<Scalars['Int']>;
  breakdown?: Maybe<Scalars['Boolean']>;
  viso?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  tested_at?: Maybe<Scalars['Timestamp']>;
  test_passed?: Maybe<Scalars['Boolean']>;
  operator_id?: Maybe<Scalars['ID']>;
};

/** EIS STATION */
export type EisStation = {
  __typename?: 'EisStation';
  id?: Maybe<Scalars['ID']>;
  assemblyLineNum?: Maybe<Scalars['Int']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  acFrequencySweep?: Maybe<Scalars['Float']>;
  acInputVoltage?: Maybe<Scalars['Float']>;
  impedance?: Maybe<Scalars['Float']>;
  ocv?: Maybe<Scalars['Float']>;
  capacitance?: Maybe<Scalars['Float']>;
  fitErrorPercent?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['String']>;
  realSpec?: Maybe<Scalars['String']>;
  ocvSpec?: Maybe<Scalars['String']>;
  capSpec?: Maybe<Scalars['String']>;
  fitSpec?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
};

export type ElectrodeAssemblyProcess = {
  __typename?: 'ElectrodeAssemblyProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery whose electrodes are assembled
   * @deprecated Use camel-case variant
   */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  adhesive_spec?: Maybe<AdhesiveSpec>;
  felt_spec?: Maybe<FeltSpec>;
  /**
   * JSON
   * @deprecated Use camel-case variant
   */
  felt_corner_thickness?: Maybe<Scalars['String']>;
  /** JSON */
  feltCornerThickness?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  plate_id_positive?: Maybe<Scalars['Int']>;
  plateIdPositive?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  plate_id_negative?: Maybe<Scalars['Int']>;
  plateIdNegative?: Maybe<Scalars['Int']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  plate_weight_positive_g?: Maybe<Scalars['String']>;
  plateWeightPositiveG?: Maybe<Scalars['Float']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  plate_weight_negative_g?: Maybe<Scalars['String']>;
  plateWeightNegativeG?: Maybe<Scalars['Float']>;
  /** Comments about the assembly */
  notes?: Maybe<Scalars['String']>;
  /**
   * When this process was started
   * @deprecated Use camel-case variant
   */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * When the electrodes were assembled
   * @deprecated Use camel-case variant
   */
  assembled_at?: Maybe<Scalars['Timestamp']>;
  assembledAt?: Maybe<Scalars['Timestamp']>;
  /** The assembler */
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  glueLot?: Maybe<Scalars['String']>;
  glueVolumeMl?: Maybe<Scalars['Float']>;
  feltLotOrPo?: Maybe<Scalars['String']>;
  feltWeightG?: Maybe<Scalars['Float']>;
  adhesiveRecipe?: Maybe<AdhesiveRecipe>;
  feltType?: Maybe<FeltType>;
  vendor?: Maybe<Vendor>;
  FeltSizeThicknessMm?: Maybe<Scalars['Float']>;
};

export type ElectrodeAssemblyProcessUpdate = {
  battery_serial_number: Scalars['String'];
  adhesive_spec?: Maybe<AdhesiveSpecUpdate>;
  felt_spec?: Maybe<FeltSpecUpdate>;
  /** JSON */
  felt_corner_thickness?: Maybe<Scalars['String']>;
  plate_id_positive?: Maybe<Scalars['Int']>;
  plate_id_negative?: Maybe<Scalars['Int']>;
  /** Precise decimal */
  plate_weight_positive?: Maybe<Scalars['String']>;
  plate_weight_negative?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  assembled_at?: Maybe<Scalars['Timestamp']>;
  operator_id?: Maybe<Scalars['ID']>;
  feltInstructions?: Maybe<Scalars['String']>;
  feltTypeId?: Maybe<Scalars['ID']>;
  feltLotOrPo?: Maybe<Scalars['String']>;
  feltSizeLengthIn?: Maybe<Scalars['String']>;
  feltSizeWidthIn?: Maybe<Scalars['String']>;
  feltSizeThicknessMm?: Maybe<Scalars['String']>;
  feltWeightG?: Maybe<Scalars['String']>;
  feltCutAt?: Maybe<Scalars['Timestamp']>;
  glueApplyInstruction?: Maybe<Scalars['String']>;
  glueTypeId?: Maybe<Scalars['ID']>;
  glueLot?: Maybe<Scalars['String']>;
  glueVolumeMl?: Maybe<Scalars['String']>;
  partGluedCategoryId?: Maybe<Scalars['ID']>;
};

export type ElectrolyteCellsInput = {
  cellNum: Scalars['Int'];
  volume?: Maybe<Scalars['Float']>;
};

export type ElectrolyteCellsOutput = {
  __typename?: 'ElectrolyteCellsOutput';
  cellNum?: Maybe<Scalars['Int']>;
  volume?: Maybe<Scalars['Float']>;
};

/** EL Fill Station */
export type ElectrolyteFillStation = {
  __typename?: 'ElectrolyteFillStation';
  assemblyLineNum?: Maybe<Scalars['Int']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  electrolyteMass?: Maybe<Scalars['Float']>;
  filledBatteryWeight?: Maybe<Scalars['Float']>;
  fillVolume?: Maybe<Scalars['Float']>;
  rpm?: Maybe<Scalars['Float']>;
  eCond?: Maybe<Scalars['Float']>;
  eCondSpec?: Maybe<Scalars['String']>;
  temp?: Maybe<Scalars['Float']>;
  tempSpec?: Maybe<Scalars['String']>;
  ph?: Maybe<Scalars['Float']>;
  phSpec?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['Float']>;
  densitySpec?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Float']>;
  weightSpec?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  numCellsFilled?: Maybe<Scalars['Int']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
};

export type ElectrolyteFillingProcess = {
  __typename?: 'ElectrolyteFillingProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery which is filled with an electrolyte
   * @deprecated Use camel-case variant
   */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  electrolyte_filling_actual?: Maybe<ElectrolyteFillingSpec>;
  /** @deprecated Use camel-case variant */
  electrolyte_batch_id?: Maybe<Scalars['String']>;
  electrolyteBatchId?: Maybe<Scalars['String']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  electrolyte_mass_kg?: Maybe<Scalars['String']>;
  electrolyteMassKg?: Maybe<Scalars['Float']>;
  electrolyteVolumeMl?: Maybe<Scalars['Float']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  electrolyte_ph?: Maybe<Scalars['String']>;
  electrolytePh?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  electrolyte_conductivity_ms_cm?: Maybe<Scalars['String']>;
  electrolyteConductivityMsCm?: Maybe<Scalars['String']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  electrolyte_density?: Maybe<Scalars['String']>;
  electrolyteDensity?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  prsv_carrier_assembly_date?: Maybe<Scalars['Timestamp']>;
  prsvCarrierAssemblyDate?: Maybe<Scalars['Timestamp']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  dry_battery_weight_kg?: Maybe<Scalars['String']>;
  dryBatteryWeightKg?: Maybe<Scalars['Float']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  wet_battery_weight_kg?: Maybe<Scalars['String']>;
  wetBatteryWeightKg?: Maybe<Scalars['Float']>;
  /** Comments about the electrolyte filling process */
  notes?: Maybe<Scalars['String']>;
  /** The filler */
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  /**
   * When this process was started
   * @deprecated Use camel-case variant
   */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * When the battery was filled with an electrolyte
   * @deprecated Use camel-case variant
   */
  filled_at?: Maybe<Scalars['Timestamp']>;
  filledAt?: Maybe<Scalars['Timestamp']>;
};

export type ElectrolyteFillingProcessUpdate = {
  battery_serial_number: Scalars['String'];
  electrolyte_filling_spec?: Maybe<Scalars['ID']>;
  electrolyte_filling_actual?: Maybe<ElectrolyteFillingSpecUpdate>;
  electrolyte_batch_id?: Maybe<Scalars['String']>;
  /** Precise decimal */
  electrolyte_mass_kg?: Maybe<Scalars['String']>;
  /** Precise decimal */
  electrolyte_ph?: Maybe<Scalars['String']>;
  electrolyte_conductivity_ms_cm?: Maybe<Scalars['String']>;
  /** Precise decimal */
  electrolyte_density?: Maybe<Scalars['String']>;
  prsv_carrier_assembly_date?: Maybe<Scalars['Timestamp']>;
  /** Precise decimal */
  dry_battery_weight_kg?: Maybe<Scalars['String']>;
  /** Precise decimal */
  wet_battery_weight_kg?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  operator_id?: Maybe<Scalars['ID']>;
  filled_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  electrolyteRecipeId?: Maybe<Scalars['ID']>;
  electrolyteVolumeMl?: Maybe<Scalars['String']>;
};

export type ElectrolyteFillingSpec = {
  __typename?: 'ElectrolyteFillingSpec';
  id?: Maybe<Scalars['ID']>;
  /** @deprecated Use camel-case variant */
  electrolyte_recipe?: Maybe<ElectrolyteRecipe>;
  electrolyteRecipe?: Maybe<ElectrolyteRecipe>;
  /**
   * Exact precision decimal
   * @deprecated Use camel-case variant
   */
  electrolyte_volume_ml?: Maybe<Scalars['String']>;
  electrolyteVolumeMl?: Maybe<Scalars['String']>;
};

export type ElectrolyteFillingSpecUpdate = {
  /** Required if updating an existing ElectrolyteFillingSpec */
  id?: Maybe<Scalars['ID']>;
  /** Required if creating an ElectrolyteFillingSpec */
  electrolyte_recipe_id?: Maybe<Scalars['ID']>;
  /** Exact precision decimal */
  electrolyte_volume_ml?: Maybe<Scalars['String']>;
};

export type ElectrolyteIngredient = {
  __typename?: 'ElectrolyteIngredient';
  /** Unique database identifier */
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  cas_number?: Maybe<Scalars['String']>;
  casNumber?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  is_active?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type ElectrolyteIngredientQuantity = {
  __typename?: 'ElectrolyteIngredientQuantity';
  ingredient: ElectrolyteIngredient;
  amount?: Maybe<Scalars['Float']>;
  units?: Maybe<Scalars['String']>;
};

export type ElectrolyteIngredientQuantityUpdate = {
  ingredientId: Scalars['ID'];
  amount: Scalars['Float'];
  units: Scalars['String'];
};

/** The typed result of invoking the ElectrolyteIngredient query engine */
export type ElectrolyteIngredientQueryEngineResult = QueryEngineResult & {
  __typename?: 'ElectrolyteIngredientQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<ElectrolyteIngredient>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type ElectrolyteIngredientUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  casNumber: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type ElectrolyteRecipe = {
  __typename?: 'ElectrolyteRecipe';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** This recipe's name */
  name?: Maybe<Scalars['String']>;
  /** This recipe's revision */
  revision?: Maybe<Scalars['String']>;
  /** The recipe's ingredients */
  ingredients?: Maybe<Array<ElectrolyteIngredientQuantity>>;
  /** Comments about the recipe */
  notes?: Maybe<Scalars['String']>;
  /**
   * When the recipe was added to the database
   * @deprecated Use camel-case variant
   */
  created_at?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  ph?: Maybe<Scalars['String']>;
  locked: Scalars['Boolean'];
  summary?: Maybe<Scalars['String']>;
};

/** The typed result of invoking the ElectrolyteRecipe query engine */
export type ElectrolyteRecipeQueryEngineResult = QueryEngineResult & {
  __typename?: 'ElectrolyteRecipeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<ElectrolyteRecipe>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type ElectrolyteRecipeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<ElectrolyteIngredientQuantityUpdate>>;
  notes?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  ph?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type EnumDetailsOutput = {
  __typename?: 'EnumDetailsOutput';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
};

export type Experiment = {
  __typename?: 'Experiment';
  id: Scalars['ID'];
  ownerId?: Maybe<Scalars['ID']>;
  owner?: Maybe<User>;
  purpose?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  watchers?: Maybe<Array<User>>;
  title?: Maybe<Scalars['String']>;
  locked: Scalars['Boolean'];
  batteryPopulations: Array<BatteryPopulation>;
  batteryPopulationCount: Scalars['Int'];
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  batteryBuildMatrixCount: Scalars['Int'];
  /** Legacy experiments do not have "createdAt", thus the attribute is nullable */
  createdAt?: Maybe<Scalars['Timestamp']>;
  collectionId?: Maybe<Scalars['ID']>;
  collection?: Maybe<BatteryTestCollection>;
};

/** The typed result of invoking the Experiment query engine */
export type ExperimentQueryEngineResult = QueryEngineResult & {
  __typename?: 'ExperimentQueryEngineResult';
  /** A possibly filtered, sorted, and paginated list of requested objects */
  results: Array<Experiment>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** TODO Database uses a String, but we need to use an integer in the future */
export type ExperimentUpdate = {
  /** The id of the experiment to create, update, or delete */
  id: Scalars['ID'];
  /** The id of the experiment owner; defaults to the caller's id */
  ownerId?: Maybe<Scalars['ID']>;
  /** The purpose of the experiment; no default */
  purpose?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  watcherIds?: Maybe<Array<Scalars['ID']>>;
  createCollection?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type ExperimentalGroup = {
  __typename?: 'ExperimentalGroup';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type FailureAnalysisAutopsyProcess = {
  __typename?: 'FailureAnalysisAutopsyProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  eisNotes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  completed_at?: Maybe<Scalars['Timestamp']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
  eisOperatorId?: Maybe<Scalars['ID']>;
  eisOperator?: Maybe<User>;
  /** Precise decimal */
  batteryMassKg?: Maybe<Scalars['Float']>;
  /** Precise decimal */
  electrolyteVolumeMl?: Maybe<Scalars['Float']>;
  electrolyteColor?: Maybe<Scalars['String']>;
  cathodeNotes?: Maybe<Scalars['String']>;
  anodeNotes?: Maybe<Scalars['String']>;
  frameNotes?: Maybe<Scalars['String']>;
  sample?: Maybe<Scalars['String']>;
  feltAdhesiveQuality?: Maybe<Scalars['Int']>;
  /** Precise decimal */
  ohmResistanceMilliOhms?: Maybe<Scalars['Float']>;
  /** Precise decimal */
  ocvVoltageV?: Maybe<Scalars['Float']>;
  eisMachine?: Maybe<Scalars['String']>;
  faOperatorId?: Maybe<Scalars['ID']>;
  faOperator?: Maybe<User>;
  faNotes?: Maybe<Scalars['String']>;
};

export type FailureAnalysisAutopsyProcessUpdate = {
  battery_serial_number: Scalars['String'];
  eisNotes?: Maybe<Scalars['String']>;
  started_at?: Maybe<Scalars['Timestamp']>;
  completed_at?: Maybe<Scalars['Timestamp']>;
  eisOperatorId?: Maybe<Scalars['ID']>;
  /** Precise decimal */
  batteryMassKg?: Maybe<Scalars['String']>;
  /** Precise decimal */
  electrolyteVolumeMl?: Maybe<Scalars['String']>;
  electrolyteColor?: Maybe<Scalars['String']>;
  cathodeNotes?: Maybe<Scalars['String']>;
  anodeNotes?: Maybe<Scalars['String']>;
  frameNotes?: Maybe<Scalars['String']>;
  sample?: Maybe<Scalars['String']>;
  feltAdhesiveQuality?: Maybe<Scalars['Int']>;
  /** Precise decimal */
  ohmResistanceMilliOhms?: Maybe<Scalars['String']>;
  /** Precise decimal */
  ocvVoltageV?: Maybe<Scalars['String']>;
  eisMachine?: Maybe<Scalars['String']>;
  faOperatorId?: Maybe<Scalars['ID']>;
  faNotes?: Maybe<Scalars['String']>;
};

export type FatQcInput = {
  containerSerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  approvedBy?: Maybe<Scalars['ID']>;
  approvedAt?: Maybe<Scalars['Timestamp']>;
};

export type FatQcOutput = ContainerSignOffFields & {
  __typename?: 'FatQcOutput';
  containerSerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  approvedBy?: Maybe<Scalars['ID']>;
  approvedAt?: Maybe<Scalars['Timestamp']>;
  approvedUserName?: Maybe<Scalars['String']>;
};

export type FeltModificationProcess = {
  __typename?: 'FeltModificationProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery that received a felt modification
   * @deprecated Use camel-case variant
   */
  battery_build_matrix: BatteryBuildMatrix;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  cathode_weight_before_felt_trimming?: Maybe<Scalars['String']>;
  cathodeWeightBeforeFeltTrimming?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  felt_shaved_and_clipped?: Maybe<Scalars['Boolean']>;
  feltShavedAndClipped?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  felt_vacuumed?: Maybe<Scalars['Boolean']>;
  feltVacuumed?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  felt_treated?: Maybe<Scalars['Boolean']>;
  feltTreated?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  felt_treated_with?: Maybe<Scalars['String']>;
  feltTreatedWith?: Maybe<Scalars['String']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  cathode_weight_after_felt_treatment?: Maybe<Scalars['String']>;
  cathodeWeightAfterFeltTreatment?: Maybe<Scalars['Float']>;
  /** Comments about the modification */
  notes?: Maybe<Scalars['String']>;
  /**
   * When this process started
   * @deprecated Use camel-case variant
   */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * When this was last modified
   * @deprecated Use camel-case variant
   */
  modified_at?: Maybe<Scalars['Timestamp']>;
  modifiedAt?: Maybe<Scalars['Timestamp']>;
  /** The modifier */
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
};

export type FeltModificationProcessUpdate = {
  battery_serial_number: Scalars['String'];
  /** Precise decimal */
  cathode_weight_before_felt_trimming?: Maybe<Scalars['String']>;
  felt_shaved_and_clipped?: Maybe<Scalars['Boolean']>;
  felt_vacuumed?: Maybe<Scalars['Boolean']>;
  felt_treated?: Maybe<Scalars['Boolean']>;
  felt_treated_with?: Maybe<Scalars['String']>;
  /** Precise decimal */
  cathode_weight_after_felt_treatment?: Maybe<Scalars['String']>;
  weight_units?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  modified_at?: Maybe<Scalars['Timestamp']>;
  operator_id?: Maybe<Scalars['ID']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
};

export type FeltSpec = {
  __typename?: 'FeltSpec';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['String']>;
  felt_type?: Maybe<FeltType>;
  felt_lot_or_po?: Maybe<Scalars['String']>;
  felt_size_length_in?: Maybe<Scalars['Float']>;
  felt_size_width_in?: Maybe<Scalars['Float']>;
  felt_size_thickness_mm?: Maybe<Scalars['Float']>;
  felt_weight_g?: Maybe<Scalars['Float']>;
  notes?: Maybe<Scalars['String']>;
  felt_cut_at?: Maybe<Scalars['Timestamp']>;
  created_at?: Maybe<Scalars['Timestamp']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type FeltSpecUpdate = {
  name: Scalars['String'];
  /** Precise decimal */
  revision?: Maybe<Scalars['String']>;
  feltTypeId?: Maybe<Scalars['ID']>;
  feltLotOrPo?: Maybe<Scalars['String']>;
  /** Precise decimal */
  feltSizeLengthIn?: Maybe<Scalars['String']>;
  feltSizeWidthIn?: Maybe<Scalars['String']>;
  feltSizeThicknessMM?: Maybe<Scalars['String']>;
  feltWeightG?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  feltCutAt?: Maybe<Scalars['Timestamp']>;
  /** Whether this spec is active; defaults to 'true' */
  isActive?: Maybe<Scalars['Boolean']>;
};

export type FeltType = {
  __typename?: 'FeltType';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The felt type's name */
  name: Scalars['String'];
  vendorId?: Maybe<Scalars['ID']>;
  /** The vendor from which this felt type was purchased */
  vendor?: Maybe<Vendor>;
  /** Details about the felt type; JSON */
  summary?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
};

/** The typed result of invoking the FeltType query engine */
export type FeltTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'FeltTypeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<FeltType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type FeltTypeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['ID']>;
  summary?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type FileCategory = {
  __typename?: 'FileCategory';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FillingCellPressureInput = {
  cellPressureDecays?: Maybe<Array<Maybe<CellPressureDecayInputs>>>;
  roomTemperature?: Maybe<Scalars['Float']>;
  cell1Temperature?: Maybe<Scalars['Float']>;
  cell20Temperature?: Maybe<Scalars['Float']>;
  cell40Temperature?: Maybe<Scalars['Float']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type FillingCellPressureOutput = {
  __typename?: 'FillingCellPressureOutput';
  cellPressureDecays?: Maybe<Array<Maybe<CellPressureDecayOutputs>>>;
  roomTemperature?: Maybe<Scalars['Float']>;
  cell1Temperature?: Maybe<Scalars['Float']>;
  cell20Temperature?: Maybe<Scalars['Float']>;
  cell40Temperature?: Maybe<Scalars['Float']>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FillingEisInput = {
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  impedance?: Maybe<Scalars['Float']>;
  ocv?: Maybe<Scalars['Float']>;
  capacitance?: Maybe<Scalars['Float']>;
  fitErrorPercent?: Maybe<Scalars['Float']>;
};

export type FillingEisOutput = {
  __typename?: 'FillingEisOutput';
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  impedance?: Maybe<Scalars['Float']>;
  ocv?: Maybe<Scalars['Float']>;
  capacitance?: Maybe<Scalars['Float']>;
  fitErrorPercent?: Maybe<Scalars['Float']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FillingElectrolyteInput = {
  electrolyteLots?: Maybe<Array<Maybe<LotNumbersInput>>>;
  electrolyteCells?: Maybe<Array<Maybe<ElectrolyteCellsInput>>>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type FillingElectrolyteOutput = {
  __typename?: 'FillingElectrolyteOutput';
  electrolyteLots?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  electrolyteCells?: Maybe<Array<Maybe<ElectrolyteCellsOutput>>>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FillingHipotInput = {
  hipotVoltage?: Maybe<Scalars['Float']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type FillingHipotOutput = {
  __typename?: 'FillingHipotOutput';
  hipotVoltage?: Maybe<Scalars['Float']>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FillingOpdDetailsInput = {
  roomTemperature?: Maybe<Scalars['Float']>;
  cell1Temperature?: Maybe<Scalars['Float']>;
  cell20Temperature?: Maybe<Scalars['Float']>;
  cell40Temperature?: Maybe<Scalars['Float']>;
  testPerformedAt?: Maybe<Scalars['Timestamp']>;
  testNumber: Scalars['Int'];
  leakRate?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Float']>;
};

export type FillingOpdDetailsOutput = {
  __typename?: 'FillingOpdDetailsOutput';
  roomTemperature?: Maybe<Scalars['Float']>;
  cell1Temperature?: Maybe<Scalars['Float']>;
  cell20Temperature?: Maybe<Scalars['Float']>;
  cell40Temperature?: Maybe<Scalars['Float']>;
  testPerformedAt?: Maybe<Scalars['Timestamp']>;
  testNumber?: Maybe<Scalars['Int']>;
  leakRate?: Maybe<Scalars['Float']>;
  pressure?: Maybe<Scalars['Float']>;
};

/** FILLING STATION */
export type FillingOpdInput = {
  fillingOpds?: Maybe<Array<Maybe<FillingOpdDetailsInput>>>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type FillingOpdOutput = {
  __typename?: 'FillingOpdOutput';
  fillingOpds?: Maybe<Array<Maybe<FillingOpdDetailsOutput>>>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FillingStationSummary = {
  __typename?: 'FillingStationSummary';
  fillingOpd?: Maybe<FillingOpdOutput>;
  fillingCellPressure?: Maybe<FillingCellPressureOutput>;
  fillingHipot?: Maybe<FillingHipotOutput>;
  fillingWeighing?: Maybe<FillingWeighingOutput>;
  fillingElectrolyte?: Maybe<FillingElectrolyteOutput>;
  fillingEis?: Maybe<FillingEisOutput>;
  fillingReworkInstruction?: Maybe<BatteryCommentsView>;
  fillingSubmitComments?: Maybe<BatteryCommentsView>;
  fillingQuarantineComments?: Maybe<BatteryCommentsView>;
};

export type FillingValidation = {
  __typename?: 'FillingValidation';
  isOpdInvalidated?: Maybe<Scalars['Boolean']>;
  isCellPressureInvalidated?: Maybe<Scalars['Boolean']>;
  isHipotInvalidated?: Maybe<Scalars['Boolean']>;
  isFillingWeighingInvalidated?: Maybe<Scalars['Boolean']>;
  isFillingElectrolyteInvalidated?: Maybe<Scalars['Boolean']>;
  isEisInvalidated?: Maybe<Scalars['Boolean']>;
  isOpdCompleted?: Maybe<Scalars['Boolean']>;
  isCellPressureCompleted?: Maybe<Scalars['Boolean']>;
  isHipotCompleted?: Maybe<Scalars['Boolean']>;
  isFillingWeighingCompleted?: Maybe<Scalars['Boolean']>;
  isEisCompleted?: Maybe<Scalars['Boolean']>;
  isFillingElectrolyteCompleted?: Maybe<Scalars['Boolean']>;
  isFillingSubmittable?: Maybe<Scalars['Boolean']>;
};

export type FillingWeighingInput = {
  totalFilledBatteryMass?: Maybe<Scalars['Float']>;
  totalElectrolyteMass?: Maybe<Scalars['Float']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type FillingWeighingOutput = {
  __typename?: 'FillingWeighingOutput';
  totalFilledBatteryMass?: Maybe<Scalars['Float']>;
  totalElectrolyteMass?: Maybe<Scalars['Float']>;
  dryBatteryMass?: Maybe<Scalars['Float']>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FilterInput = {
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  /** for days, 1d, for minutes 1m, 1w week, etc */
  interval?: Maybe<Scalars['String']>;
};

export type FinalChecksInput = {
  productLabelInPlace?: Maybe<Scalars['Boolean']>;
  serialNumberInPlace?: Maybe<Scalars['Boolean']>;
  noLoosePartsPresent?: Maybe<Scalars['Boolean']>;
  noCosmeticDefectPresent?: Maybe<Scalars['Boolean']>;
  noDamagePresent?: Maybe<Scalars['Boolean']>;
  noStandingLiquid?: Maybe<Scalars['Boolean']>;
  batteryReadyForApproval?: Maybe<Scalars['Boolean']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type FinalChecksOutput = {
  __typename?: 'FinalChecksOutput';
  productLabelInPlace?: Maybe<Scalars['Boolean']>;
  serialNumberInPlace?: Maybe<Scalars['Boolean']>;
  noLoosePartsPresent?: Maybe<Scalars['Boolean']>;
  noCosmeticDefectPresent?: Maybe<Scalars['Boolean']>;
  noDamagePresent?: Maybe<Scalars['Boolean']>;
  noStandingLiquid?: Maybe<Scalars['Boolean']>;
  batteryReadyForApproval?: Maybe<Scalars['Boolean']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FinalizationStationSummary = {
  __typename?: 'FinalizationStationSummary';
  gasChannelCoverSummary?: Maybe<GasChannelCoverOutput>;
  overChargeKitSummary?: Maybe<OverChargeKitOutput>;
  mmbSummary?: Maybe<MmbOutput>;
  finalChecksSummary?: Maybe<FinalChecksOutput>;
  gasChannelCover?: Maybe<GasChannelCoverOutput>;
  overChargeKit?: Maybe<OverChargeKitOutput>;
  mmb?: Maybe<MmbOutput>;
  finalChecks?: Maybe<FinalChecksOutput>;
  finalizationReworkInstruction?: Maybe<BatteryCommentsView>;
  finalizationSubmitComments?: Maybe<BatteryCommentsView>;
  finalizationQuarantineComments?: Maybe<BatteryCommentsView>;
};

export type FinalizationValidation = {
  __typename?: 'FinalizationValidation';
  isGcCoverCompleted?: Maybe<Scalars['Boolean']>;
  isOverChargeKitCompleted?: Maybe<Scalars['Boolean']>;
  isMmbCompleted?: Maybe<Scalars['Boolean']>;
  isFinalCheckCompleted?: Maybe<Scalars['Boolean']>;
  isGcCoverInvalidated?: Maybe<Scalars['Boolean']>;
  isOverChargeKitInvalidated?: Maybe<Scalars['Boolean']>;
  isMmbInvalidated?: Maybe<Scalars['Boolean']>;
  isFinalCheckInvalidated?: Maybe<Scalars['Boolean']>;
  isFinalizationSubmittable?: Maybe<Scalars['Boolean']>;
};

export type FrameAssemblyProcess = {
  __typename?: 'FrameAssemblyProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery for which this assembly was built
   * @deprecated Use camel-case variant
   */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  frame_assembly_actual?: Maybe<FrameAssemblySpec>;
  frameAssemblyInstructions?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  o_ring_lot?: Maybe<Scalars['String']>;
  oRingLot?: Maybe<Scalars['String']>;
  /** Comments about the assembly */
  notes?: Maybe<Scalars['String']>;
  /**
   * When this was assembled
   * @deprecated Use camel-case variant
   */
  assembled_at?: Maybe<Scalars['Timestamp']>;
  assembledAt?: Maybe<Scalars['Timestamp']>;
  /** The assembler */
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  groovedFrame?: Maybe<Scalars['Boolean']>;
  dremeledBridgePort?: Maybe<Scalars['Boolean']>;
  crackedFrame?: Maybe<Scalars['Boolean']>;
  insulator?: Maybe<Scalars['Boolean']>;
  angledFrame50Degrees?: Maybe<Scalars['Boolean']>;
  reverseOrientation?: Maybe<Scalars['Boolean']>;
  frameType?: Maybe<FrameType>;
  vendor?: Maybe<Vendor>;
};

export type FrameAssemblyProcessUpdate = {
  battery_serial_number: Scalars['String'];
  frame_assembly_actual?: Maybe<FrameAssemblySpecUpdate>;
  frameAssemblyInstructions?: Maybe<Scalars['String']>;
  o_ring_lot?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  assembled_at?: Maybe<Scalars['Timestamp']>;
  operator_id?: Maybe<Scalars['ID']>;
  groovedFrame?: Maybe<Scalars['Boolean']>;
  dremeledBridgePort?: Maybe<Scalars['Boolean']>;
  crackedFrame?: Maybe<Scalars['Boolean']>;
  insulator?: Maybe<Scalars['Boolean']>;
  angledFrame50Degrees?: Maybe<Scalars['Boolean']>;
  reverseOrientation?: Maybe<Scalars['Boolean']>;
  frameTypeId?: Maybe<Scalars['ID']>;
  oRingManufacturerId?: Maybe<Scalars['ID']>;
};

export type FrameAssemblySpec = {
  __typename?: 'FrameAssemblySpec';
  id?: Maybe<Scalars['ID']>;
  frame_type: FrameType;
  o_ring_manufacturer?: Maybe<Vendor>;
};

export type FrameAssemblySpecUpdate = {
  /** Id of the spec's frame type */
  frameTypeId?: Maybe<Scalars['ID']>;
  /** Id of the spec's vendor */
  oRingManufacturerId?: Maybe<Scalars['ID']>;
};

/** WELDING STATION TRAVELER */
export type FrameTraceabilityInput = {
  positiveTerminals?: Maybe<Array<Maybe<LotNumbersInput>>>;
  negativeTerminals?: Maybe<Array<Maybe<LotNumbersInput>>>;
  terminalFrames?: Maybe<Array<Maybe<LotNumbersInput>>>;
  neutralFrames?: Maybe<Array<Maybe<LotNumbersInput>>>;
  bipolarPlates?: Maybe<Array<Maybe<LotNumbersInput>>>;
  roomTemperature?: Maybe<Scalars['Float']>;
  roomHumidity?: Maybe<Scalars['Float']>;
  weldNutProtusionPositive?: Maybe<Scalars['Float']>;
  weldNutProtusionNegative?: Maybe<Scalars['Float']>;
  receivedBy?: Maybe<Scalars['ID']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  welderLine: Scalars['ID'];
  assemblyLine: Scalars['Int'];
};

export type FrameType = {
  __typename?: 'FrameType';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The frame type's name */
  name: Scalars['String'];
  vendorId?: Maybe<Scalars['ID']>;
  /** The vendor from which this frame type is purchased */
  vendor?: Maybe<Vendor>;
  /** A description */
  description: Scalars['String'];
  /** Whether this is active */
  frameThicknessMm?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
};

/** The typed result of invoking the FrameType query engine */
export type FrameTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'FrameTypeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<FrameType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type FrameTypeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  /** Precise decimal */
  frameThicknessMm?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type Furnace = {
  __typename?: 'Furnace';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The furnace's name */
  name: Scalars['String'];
  manufacturerId?: Maybe<Scalars['ID']>;
  /** The furnace's manufacturer */
  manufacturer?: Maybe<Vendor>;
  /**
   * The furnace's serial number
   * @deprecated Use camel-case variant
   */
  serial_number?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
};

export type FurnaceProcess = {
  __typename?: 'FurnaceProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  anodeId?: Maybe<Scalars['ID']>;
  /** @deprecated Use 'anode' */
  anodePlateType?: Maybe<PlateType>;
  anode?: Maybe<PlateType>;
  anodeFiredAt?: Maybe<Scalars['Timestamp']>;
  anodeFurnaceId?: Maybe<Scalars['ID']>;
  anodeFurnace?: Maybe<Furnace>;
  anodeLotOrPo?: Maybe<Scalars['String']>;
  anodeRoughnessAfterFiring?: Maybe<Scalars['String']>;
  cathodeId?: Maybe<Scalars['ID']>;
  /** @deprecated Use 'cathode' */
  cathodePlateType?: Maybe<PlateType>;
  cathode?: Maybe<PlateType>;
  cathodeFiredAt?: Maybe<Scalars['Timestamp']>;
  cathodeFurnaceId?: Maybe<Scalars['ID']>;
  cathodeFurnace?: Maybe<Furnace>;
  cathodeLotOrPo?: Maybe<Scalars['String']>;
  cathodeRoughnessAfterFiring?: Maybe<Scalars['String']>;
  anodeMaterialId?: Maybe<Scalars['ID']>;
  anodeMaterial?: Maybe<CompositeMaterial>;
  cathodeMaterialId?: Maybe<Scalars['ID']>;
  cathodeMaterial?: Maybe<CompositeMaterial>;
  anodeMaterialLotOrPo?: Maybe<Scalars['String']>;
  cathodeMaterialLotOrPo?: Maybe<Scalars['String']>;
  anodeMaterialReceiptDate?: Maybe<Scalars['Timestamp']>;
  cathodeMaterialReceiptDate?: Maybe<Scalars['Timestamp']>;
  anodeMaterialMeasuredThickness?: Maybe<Scalars['Float']>;
  cathodeMaterialMeasuredThickness?: Maybe<Scalars['Float']>;
  anodeResistance?: Maybe<Scalars['Float']>;
  anodeRoughness?: Maybe<Scalars['Float']>;
  cathodeResistance?: Maybe<Scalars['Float']>;
  cathodeRoughness?: Maybe<Scalars['Float']>;
  anodeThicknessTopLeft?: Maybe<Scalars['Float']>;
  anodeThicknessTopRight?: Maybe<Scalars['Float']>;
  anodeThicknessBottomLeft?: Maybe<Scalars['Float']>;
  anodeThicknessBottomRight?: Maybe<Scalars['Float']>;
  cathodeThicknessTopLeft?: Maybe<Scalars['Float']>;
  cathodeThicknessTopRight?: Maybe<Scalars['Float']>;
  cathodeThicknessBottomLeft?: Maybe<Scalars['Float']>;
  cathodeThicknessBottomRight?: Maybe<Scalars['Float']>;
  vendorId?: Maybe<Scalars['ID']>;
  vendor?: Maybe<Vendor>;
  unitiRdi?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
};

export type FurnaceProcessUpdate = {
  batterySerialNumber: Scalars['String'];
  anodePlateTypeId?: Maybe<Scalars['ID']>;
  anodeFiredAt?: Maybe<Scalars['Timestamp']>;
  anodeFurnaceId?: Maybe<Scalars['ID']>;
  anodeLotOrPo?: Maybe<Scalars['String']>;
  anodeRoughnessAfterFiring?: Maybe<Scalars['String']>;
  cathodePlateTypeId?: Maybe<Scalars['ID']>;
  cathodeFiredAt?: Maybe<Scalars['Timestamp']>;
  cathodeFurnaceId?: Maybe<Scalars['ID']>;
  cathodeLotOrPo?: Maybe<Scalars['String']>;
  cathodeRoughnessAfterFiring?: Maybe<Scalars['String']>;
  anodeMaterialId?: Maybe<Scalars['ID']>;
  cathodeMaterialId?: Maybe<Scalars['ID']>;
  anodeMaterialLotOrPo?: Maybe<Scalars['String']>;
  cathodeMaterialLotOrPo?: Maybe<Scalars['String']>;
  anodeMaterialReceiptDate?: Maybe<Scalars['Timestamp']>;
  cathodeMaterialReceiptDate?: Maybe<Scalars['Timestamp']>;
  anodeMaterialMeasuredThickness?: Maybe<Scalars['Float']>;
  cathodeMaterialMeasuredThickness?: Maybe<Scalars['Float']>;
  anodeResistance?: Maybe<Scalars['Float']>;
  anodeRoughness?: Maybe<Scalars['Float']>;
  cathodeResistance?: Maybe<Scalars['Float']>;
  cathodeRoughness?: Maybe<Scalars['Float']>;
  anodeThicknessTopLeft?: Maybe<Scalars['Float']>;
  anodeThicknessTopRight?: Maybe<Scalars['Float']>;
  anodeThicknessBottomLeft?: Maybe<Scalars['Float']>;
  anodeThicknessBottomRight?: Maybe<Scalars['Float']>;
  cathodeThicknessTopLeft?: Maybe<Scalars['Float']>;
  cathodeThicknessTopRight?: Maybe<Scalars['Float']>;
  cathodeThicknessBottomLeft?: Maybe<Scalars['Float']>;
  cathodeThicknessBottomRight?: Maybe<Scalars['Float']>;
  vendorId?: Maybe<Scalars['ID']>;
  unitiRdi?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['ID']>;
};

/** The typed result of invoking the Furnace query engine */
export type FurnaceQueryEngineResult = QueryEngineResult & {
  __typename?: 'FurnaceQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<Furnace>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type FurnaceUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  manufacturerId?: Maybe<Scalars['ID']>;
  serialNumber?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

/** FINALIZATION STATION */
export type GasChannelCoverInput = {
  gcCoverLot?: Maybe<Scalars['String']>;
  gcCoverInstallPressForce?: Maybe<Scalars['Float']>;
  gcCoverInstallPressDecay?: Maybe<Scalars['Float']>;
  gcConfirmedClean?: Maybe<Scalars['Boolean']>;
  nonconformanceReportNum?: Maybe<Scalars['String']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  gcCoverLots?: Maybe<Array<Maybe<LotNumbersInput>>>;
};

export type GasChannelCoverOutput = {
  __typename?: 'GasChannelCoverOutput';
  /** @deprecated use gcCoverLots */
  gcCoverLot?: Maybe<Scalars['String']>;
  gcCoverInstallPressForce?: Maybe<Scalars['Float']>;
  deviation?: Maybe<Scalars['String']>;
  gcCoverInstallPressDecay?: Maybe<Scalars['Float']>;
  gcConfirmedClean?: Maybe<Scalars['Boolean']>;
  nonconformanceReportNum?: Maybe<Scalars['String']>;
  assemblyLine?: Maybe<Scalars['Int']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  gcCoverLots?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GlobalInst = {
  __typename?: 'GlobalInst';
  powerRating?: Maybe<Scalars['Float']>;
  energyRating?: Maybe<Scalars['Float']>;
  spotPower?: Maybe<Scalars['Float']>;
  spotEnergy?: Maybe<Scalars['Float']>;
  cumulativeEnergy?: Maybe<Scalars['Float']>;
  cumulativeCarbonOffset?: Maybe<Scalars['Float']>;
  latestInstantaneousPower?: Maybe<Scalars['Float']>;
  latestInstantaneousDischargeEnergy?: Maybe<Scalars['Float']>;
};

export type GlobalInstCycleStats = {
  __typename?: 'GlobalInstCycleStats';
  systemStatelessDischargeEnergyLifetime?: Maybe<Scalars['Float']>;
};

export type GroupedBatteryTests = {
  batterySerialNumbers: Array<Scalars['String']>;
  batteryBuildMatrices: Array<BatteryBuildMatrix>;
  numBatteries: Scalars['Int'];
  minInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevInitialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevHundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  maxLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  avgLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  stddevLatestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  minCompositeScore?: Maybe<Scalars['Float']>;
  maxCompositeScore?: Maybe<Scalars['Float']>;
  avgCompositeScore?: Maybe<Scalars['Float']>;
  stddevCompositeScore?: Maybe<Scalars['Float']>;
  minCompositeScoreDelta?: Maybe<Scalars['Float']>;
  maxCompositeScoreDelta?: Maybe<Scalars['Float']>;
  avgCompositeScoreDelta?: Maybe<Scalars['Float']>;
  stddevCompositeScoreDelta?: Maybe<Scalars['Float']>;
  minCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMinimum?: Maybe<Scalars['Float']>;
  minCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  maxCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  avgCompositeScoreMaximum?: Maybe<Scalars['Float']>;
  stddevCompositeScoreMaximum?: Maybe<Scalars['Float']>;
};

export type HardwareInfoRecordingProcess = {
  __typename?: 'HardwareInfoRecordingProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /** @deprecated Use camel-case variant */
  hex_nut_count?: Maybe<Scalars['Int']>;
  hexNutCount?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  hex_head_bolt_count?: Maybe<Scalars['Int']>;
  hexHeadBoltCount?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  tooth_lock_washer_count?: Maybe<Scalars['Int']>;
  toothLockWasherCount?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  flat_washer_count?: Maybe<Scalars['Int']>;
  flatWasherCount?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  belleville_disk_spring_count?: Maybe<Scalars['Int']>;
  bellevilleDiskSpringCount?: Maybe<Scalars['Int']>;
  /** @deprecated Use camel-case variant */
  top_hat_washer_count?: Maybe<Scalars['Int']>;
  topHatWasherCount?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  recorded_at?: Maybe<Scalars['Timestamp']>;
  recordedAt?: Maybe<Scalars['Timestamp']>;
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
};

export type HardwareInfoRecordingProcessUpdate = {
  battery_serial_number: Scalars['String'];
  hex_nut_count?: Maybe<Scalars['Int']>;
  hex_head_bolt_count?: Maybe<Scalars['Int']>;
  tooth_lock_washer_count?: Maybe<Scalars['Int']>;
  flat_washer_count?: Maybe<Scalars['Int']>;
  belleville_disk_spring_count?: Maybe<Scalars['Int']>;
  top_hat_washer_count?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['String']>;
  recorded_at?: Maybe<Scalars['Timestamp']>;
  operator_id?: Maybe<Scalars['ID']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
};

export type HeartbeatOutput = {
  __typename?: 'HeartbeatOutput';
  id: Scalars['ID'];
  siteId?: Maybe<Scalars['Int']>;
  dataPipelineTimestamp?: Maybe<Scalars['Timestamp']>;
  electrodeStationTimestamp?: Maybe<Scalars['Timestamp']>;
  fillingStationTimestamp?: Maybe<Scalars['Timestamp']>;
  dukane1Timestamp?: Maybe<Scalars['Timestamp']>;
  dukane2Timestamp?: Maybe<Scalars['Timestamp']>;
  dukane3Timestamp?: Maybe<Scalars['Timestamp']>;
  dukane4Timestamp?: Maybe<Scalars['Timestamp']>;
};

export type HipotStationBoxPressure = {
  __typename?: 'HipotStationBoxPressure';
  id?: Maybe<Scalars['ID']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  assemblyLineNum?: Maybe<Scalars['Int']>;
  endingPsi?: Maybe<Scalars['String']>;
  leakRate?: Maybe<Scalars['String']>;
  endingPsiSpec?: Maybe<Scalars['String']>;
  leakRateSpec?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
  result?: Maybe<Scalars['String']>;
};

export type HipotStationCellPressure = {
  __typename?: 'HipotStationCellPressure';
  id: Scalars['ID'];
  batterySerialNumber?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  assemblyLineNum?: Maybe<Scalars['Int']>;
  cellNum?: Maybe<Scalars['Int']>;
  endingPsi?: Maybe<Scalars['Float']>;
  leakRate?: Maybe<Scalars['Float']>;
  endingPsiSpec?: Maybe<Scalars['String']>;
  leakRateSpec?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
  result?: Maybe<Scalars['String']>;
};

/** HIPOT STATION */
export type HipotStationOuput = {
  __typename?: 'HipotStationOuput';
  id?: Maybe<Scalars['ID']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  assemblyLineNum?: Maybe<Scalars['Int']>;
  hipotVoltage?: Maybe<Scalars['Float']>;
  voltageSpec?: Maybe<Scalars['String']>;
  maxCurrent?: Maybe<Scalars['Float']>;
  currentSpec?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
};

export type HistogramDatapoint = {
  __typename?: 'HistogramDatapoint';
  count?: Maybe<Scalars['Int']>;
  bin?: Maybe<Scalars['Float']>;
};

export type HistogramDataset = {
  __typename?: 'HistogramDataset';
  stringPosition?: Maybe<Scalars['String']>;
  batteryPosition?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<HistogramDatapoint>>>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type IqcInput = {
  containerSerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  approvedBy?: Maybe<Scalars['ID']>;
  approvedAt?: Maybe<Scalars['Timestamp']>;
  iqcPassed?: Maybe<Scalars['Boolean']>;
  vendorContainerId?: Maybe<Scalars['String']>;
};

export type IqcOutput = ContainerSignOffFields & {
  __typename?: 'IqcOutput';
  containerSerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  approvedBy?: Maybe<Scalars['ID']>;
  approvedAt?: Maybe<Scalars['Timestamp']>;
  approvedUserName?: Maybe<Scalars['String']>;
  iqcPassed?: Maybe<Scalars['Boolean']>;
  vendorContainerId?: Maybe<Scalars['String']>;
};

export type KeyValuePairUpdate = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type LabTestProcess = {
  __typename?: 'LabTestProcess';
  id: Scalars['ID'];
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  createdAt?: Maybe<Scalars['Timestamp']>;
  modifiedAt?: Maybe<Scalars['Timestamp']>;
  cyclerChannelId?: Maybe<Scalars['ID']>;
  cyclerChannel?: Maybe<CyclerChannel>;
  connectedById?: Maybe<Scalars['ID']>;
  connectedBy?: Maybe<User>;
  connectedAt?: Maybe<Scalars['Timestamp']>;
  connectionNotes?: Maybe<Scalars['String']>;
  cyclingProgramId?: Maybe<Scalars['ID']>;
  cyclingProgram?: Maybe<CyclingProgram>;
  ocvVoltageV?: Maybe<Scalars['Float']>;
  testedById?: Maybe<Scalars['ID']>;
  testedBy?: Maybe<User>;
  testedAt?: Maybe<Scalars['Timestamp']>;
  testNotes?: Maybe<Scalars['String']>;
  soc?: Maybe<Scalars['String']>;
  numCycles?: Maybe<Scalars['Int']>;
  reasonForTestEnd?: Maybe<Scalars['String']>;
  voltageV?: Maybe<Scalars['Float']>;
  testEndedById?: Maybe<Scalars['ID']>;
  testEndedBy?: Maybe<User>;
  testEndedAt?: Maybe<Scalars['Timestamp']>;
  testEndNotes?: Maybe<Scalars['String']>;
  disconnectedById?: Maybe<Scalars['ID']>;
  disconnectedBy?: Maybe<User>;
  disconnectedAt?: Maybe<Scalars['Timestamp']>;
  disconnectionNotes?: Maybe<Scalars['String']>;
  onTestSubmitted: Scalars['Boolean'];
  chargeRate?: Maybe<Scalars['String']>;
  chargeVoltageCutoff?: Maybe<Scalars['String']>;
  chargeCapacity?: Maybe<Scalars['String']>;
  topOfChargeRestTime?: Maybe<Scalars['String']>;
  dischargeRate?: Maybe<Scalars['String']>;
  dischargeVoltageCutoff?: Maybe<Scalars['String']>;
  dischargeCVCutoff?: Maybe<Scalars['String']>;
  bottomOfDischargeRestTime?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  stepDuration?: Maybe<Scalars['Float']>;
  stepNumber?: Maybe<Scalars['Int']>;
  /** Precise decimal */
  measuredChargeWh?: Maybe<Scalars['Float']>;
  measuredChargeAh?: Maybe<Scalars['Float']>;
  measuredDischargeWh?: Maybe<Scalars['Float']>;
  measuredDischargeAh?: Maybe<Scalars['Float']>;
  tag?: Maybe<Scalars['String']>;
  stepDownRateW?: Maybe<Scalars['String']>;
  stepDownCutoffV?: Maybe<Scalars['String']>;
};

export type LabTestProcessUpdate = {
  id?: Maybe<Scalars['ID']>;
  batterySerialNumber: Scalars['String'];
  cyclerChannelId?: Maybe<Scalars['ID']>;
  connectedById?: Maybe<Scalars['ID']>;
  connectedAt?: Maybe<Scalars['Timestamp']>;
  connectionNotes?: Maybe<Scalars['String']>;
  cyclingProgramId?: Maybe<Scalars['ID']>;
  ocvVoltageV?: Maybe<Scalars['Float']>;
  testedById?: Maybe<Scalars['ID']>;
  testedAt?: Maybe<Scalars['Timestamp']>;
  testNotes?: Maybe<Scalars['String']>;
  soc?: Maybe<Scalars['String']>;
  numCycles?: Maybe<Scalars['Int']>;
  reasonForTestEnd?: Maybe<Scalars['String']>;
  voltageV?: Maybe<Scalars['Float']>;
  testEndedById?: Maybe<Scalars['ID']>;
  testEndedAt?: Maybe<Scalars['Timestamp']>;
  testEndNotes?: Maybe<Scalars['String']>;
  disconnectedById?: Maybe<Scalars['ID']>;
  disconnectedAt?: Maybe<Scalars['Timestamp']>;
  disconnectionNotes?: Maybe<Scalars['String']>;
  onTestSubmitted?: Maybe<Scalars['Boolean']>;
  chargeRate?: Maybe<Scalars['String']>;
  chargeVoltageCutoff?: Maybe<Scalars['String']>;
  chargeCapacity?: Maybe<Scalars['String']>;
  topOfChargeRestTime?: Maybe<Scalars['String']>;
  dischargeRate?: Maybe<Scalars['String']>;
  dischargeVoltageCutoff?: Maybe<Scalars['String']>;
  dischargeCVCutoff?: Maybe<Scalars['String']>;
  bottomOfDischargeRestTime?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  stepNumber?: Maybe<Scalars['Int']>;
  stepDuration?: Maybe<Scalars['Float']>;
  /** Precise decimal */
  measuredChargeWh?: Maybe<Scalars['String']>;
  measuredChargeAh?: Maybe<Scalars['String']>;
  measuredDischargeWh?: Maybe<Scalars['String']>;
  measuredDischargeAh?: Maybe<Scalars['String']>;
  tag?: Maybe<Scalars['String']>;
  stepDownRateW?: Maybe<Scalars['String']>;
  stepDownCutoffV?: Maybe<Scalars['String']>;
};

export type LotNumbersInput = {
  lotNumber?: Maybe<Scalars['String']>;
  scanned?: Maybe<Scalars['Boolean']>;
  deviation?: Maybe<Scalars['String']>;
};

export type LotTracebilityView = {
  __typename?: 'LotTracebilityView';
  lotNumber?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  endedAt?: Maybe<Scalars['Timestamp']>;
  usedQty?: Maybe<Scalars['Int']>;
  deviation?: Maybe<Scalars['String']>;
  componentType?: Maybe<Scalars['String']>;
  lastUpdatedAt?: Maybe<Scalars['Timestamp']>;
};

export type LotTracebilityViewQueryEngineResult = QueryEngineResult & {
  __typename?: 'LotTracebilityViewQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<LotTracebilityView>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type ManfacturingComponentLotInput = {
  componentType: ComponentType;
  lotNumber: Scalars['String'];
  partNumber?: Maybe<Scalars['String']>;
  comments: Scalars['String'];
  receivedBy: Scalars['ID'];
  receivedAt: Scalars['Timestamp'];
  poQty?: Maybe<Scalars['Int']>;
  deviation?: Maybe<Scalars['String']>;
  assemblyLines?: Maybe<Array<Maybe<AssemblyLine>>>;
};

export type ManfacturingComponentLotOutput = {
  __typename?: 'ManfacturingComponentLotOutput';
  id?: Maybe<Scalars['ID']>;
  componentType?: Maybe<ComponentType>;
  lotNumber?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  lastUpdatedAt?: Maybe<Scalars['Timestamp']>;
  usedQty?: Maybe<Scalars['Int']>;
  poQty?: Maybe<Scalars['Int']>;
  deviation?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type ManfacturingComponentLotResult = {
  __typename?: 'ManfacturingComponentLotResult';
  id?: Maybe<Scalars['ID']>;
  componentType: Scalars['String'];
  lotNumber: Scalars['String'];
  comments: Scalars['String'];
  receivedBy?: Maybe<Scalars['ID']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  usedQty?: Maybe<Scalars['Int']>;
  poQty?: Maybe<Scalars['Int']>;
  deviation?: Maybe<Scalars['String']>;
};

export type MaterialForm = {
  __typename?: 'MaterialForm';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MeasurementSpecs = {
  __typename?: 'MeasurementSpecs';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  measureValueMin?: Maybe<Scalars['Float']>;
  measureValueMax?: Maybe<Scalars['Float']>;
  measureUnit?: Maybe<Scalars['String']>;
};

export type MeasurementSpecsInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  measureValueMin?: Maybe<Scalars['Float']>;
  measureValueMax?: Maybe<Scalars['Float']>;
  measureUnit?: Maybe<Scalars['String']>;
};

/** Measurement specs for validation */
export enum MeasurementSpecsType {
  WeldNutProtrusionNegative = 'WELD_NUT_PROTRUSION_NEGATIVE',
  WeldNutProtrusionPostive = 'WELD_NUT_PROTRUSION_POSTIVE',
  BatteryLength = 'BATTERY_LENGTH',
  BusbarShortBolt = 'BUSBAR_SHORT_BOLT',
  BusbarLongBolt = 'BUSBAR_LONG_BOLT',
  DryBatteryWeight = 'DRY_BATTERY_WEIGHT',
  FillStationDryBatteryLeakRate = 'FILL_STATION_DRY_BATTERY_LEAK_RATE',
  FillStationDryBatteryLeakPressure = 'FILL_STATION_DRY_BATTERY_LEAK_PRESSURE',
  FillStationCellLeakRate = 'FILL_STATION_CELL_LEAK_RATE',
  FillStationHipot = 'FILL_STATION_HIPOT',
  TotalElectrolyteMass = 'TOTAL_ELECTROLYTE_MASS',
  TotalFilledBatteryMass = 'TOTAL_FILLED_BATTERY_MASS',
  EisTestAc = 'EIS_TEST_AC',
  OpdRoomTemperature = 'OPD_ROOM_TEMPERATURE',
  GcCoverTestPressure = 'GC_COVER_TEST_PRESSURE',
  GcCoverPressureDecay = 'GC_COVER_PRESSURE_DECAY',
  EisOcv = 'EIS_OCV',
  EisCapacitance = 'EIS_CAPACITANCE',
  EisFitErrorPercentage = 'EIS_FIT_ERROR_PERCENTAGE',
  ElectrolyteCellsFillVolume = 'ELECTROLYTE_CELLS_FILL_VOLUME',
  UlOverChargeKitTorqueForce = 'UL_OVER_CHARGE_KIT_TORQUE_FORCE',
  NonUlOverChargeKitTorqueForce = 'NON_UL_OVER_CHARGE_KIT_TORQUE_FORCE',
  UlOverChargeKitVentPressureLow = 'UL_OVER_CHARGE_KIT_VENT_PRESSURE_LOW',
  NonUlOverChargeKitVentPressureLow = 'NON_UL_OVER_CHARGE_KIT_VENT_PRESSURE_LOW',
  UlOverChargeKitVentPressureHigh = 'UL_OVER_CHARGE_KIT_VENT_PRESSURE_HIGH',
  NonUlOverChargeKitVentPressureHigh = 'NON_UL_OVER_CHARGE_KIT_VENT_PRESSURE_HIGH',
  UlOverChargeKitPressureDecay = 'UL_OVER_CHARGE_KIT_PRESSURE_DECAY',
  UlOverChargeKitTestPressure = 'UL_OVER_CHARGE_KIT_TEST_PRESSURE',
  C2CpdRoomTemperature = 'C2CPD_ROOM_TEMPERATURE'
}

export type MfgBatteryCollection = {
  __typename?: 'MfgBatteryCollection';
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  owner: User;
  subscribers: Array<User>;
  subscribed: Scalars['Boolean'];
  favorited: Scalars['Boolean'];
  /** The time at which this collection was published. It is set to 0 or null if not published. */
  sharedAt?: Maybe<Scalars['Timestamp']>;
  notes?: Maybe<Scalars['String']>;
  queryResultCount: Scalars['Int'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  uiState?: Maybe<Scalars['String']>;
  predicate?: Maybe<Predicate>;
  query: BatteryQueryEngineResult;
};


export type MfgBatteryCollectionUiStateArgs = {
  key: Scalars['String'];
};


export type MfgBatteryCollectionQueryArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};

export type MmbInput = {
  mmbSerialNumber?: Maybe<Scalars['String']>;
  mmbSerialNumberDeviation?: Maybe<Scalars['String']>;
  mmbTestReportPassed?: Maybe<Scalars['Boolean']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type MmbOutput = {
  __typename?: 'MmbOutput';
  mmbSerialNumber?: Maybe<Scalars['String']>;
  mmbSerialNumberDeviation?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  mmbTestReportPassed?: Maybe<Scalars['Boolean']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

/** CONTAINER MODEL OPTIONS */
export type ModelOptionsInput = {
  containerSerialNumber: Scalars['String'];
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  /** modelNumber : String */
  groundFaultDetection?: Maybe<Scalars['String']>;
  energyStackHeatDetection?: Maybe<Scalars['String']>;
  energyStackHeatDetectionConduit?: Maybe<Scalars['String']>;
  lowTemp?: Maybe<Scalars['String']>;
  highTemp?: Maybe<Scalars['String']>;
  marineEnv?: Maybe<Scalars['String']>;
  seismicDesign?: Maybe<Scalars['String']>;
  networkSwitch?: Maybe<Scalars['String']>;
  networkFiberPort?: Maybe<Scalars['String']>;
  networkFiberSwitch?: Maybe<Scalars['String']>;
};

export type ModelOptionsOutput = {
  __typename?: 'ModelOptionsOutput';
  containerSerialNumber: Scalars['String'];
  deviation?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  modelNumber?: Maybe<Scalars['String']>;
  groundFaultDetection?: Maybe<Scalars['String']>;
  energyStackHeatDetection?: Maybe<Scalars['String']>;
  energyStackHeatDetectionConduit?: Maybe<Scalars['String']>;
  lowTemp?: Maybe<Scalars['String']>;
  highTemp?: Maybe<Scalars['String']>;
  marineEnv?: Maybe<Scalars['String']>;
  seismicDesign?: Maybe<Scalars['String']>;
  networkSwitch?: Maybe<Scalars['String']>;
  networkFiberPort?: Maybe<Scalars['String']>;
  networkFiberSwitch?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateUser?: Maybe<User>;
  updateUser2: User;
  updateHoltecUsers?: Maybe<Scalars['Boolean']>;
  updateUsersToInActive?: Maybe<Scalars['Boolean']>;
  validateNullOrdering: Scalars['Boolean'];
  /** @deprecated use updateBatteryTestCollection(UpdateCollectionInput) */
  create_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  destroy_collection: Scalars['Boolean'];
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  duplicate_collection?: Maybe<BatteryTestCollection>;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  update_collection?: Maybe<BatteryTestCollection>;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  publish_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  unpublish_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  favorite_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  unfavorite_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  subscribe_to_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(updateBatteryTestCollectionInput) or updateMfgBatteryCollection(UpdateMfgBatteryCollectionInput) */
  unsubscribe_from_collection: BatteryTestCollection;
  /** @deprecated use updateBatteryTestCollection(update: UpdateBatteryTestCollectionInput!) */
  updateCollection: BatteryTestCollection;
  updateBatteryTestCollection: BatteryTestCollection;
  updateMfgBatteryCollection: MfgBatteryCollection;
  updateExperiment?: Maybe<Experiment>;
  updateExperiment2: Experiment;
  updateCellType?: Maybe<CellType>;
  updateCellType2: CellType;
  updateBatteryDesign?: Maybe<BatteryDesign>;
  /** Creates or deletes a frame assembly spec */
  update_frame_assembly_spec?: Maybe<FrameAssemblySpec>;
  update_adhesive_spec?: Maybe<AdhesiveSpec>;
  update_felt_spec?: Maybe<FeltSpec>;
  updatePlateType?: Maybe<PlateType>;
  updatePlateType2: PlateType;
  updateCyclingProgram?: Maybe<CyclingProgram>;
  updateCyclingProgram2: CyclingProgram;
  updateDepartment?: Maybe<Department>;
  updateDepartment2: Department;
  updateSite?: Maybe<Site>;
  updateSite2: Site;
  updateVendor?: Maybe<Vendor>;
  updateVendor2: Vendor;
  updatePartCategory?: Maybe<PartCategory>;
  updatePartCategory2: PartCategory;
  updatePartManufacturer?: Maybe<PartManufacturer>;
  updatePartManufacturer2: PartManufacturer;
  updateFrameType?: Maybe<FrameType>;
  updateFrameType2: FrameType;
  updateFeltType?: Maybe<FeltType>;
  updateFeltType2: FeltType;
  updatePuckType?: Maybe<PuckType>;
  updatePuckType2: PuckType;
  updateFurnace?: Maybe<Furnace>;
  updateFurnace2: Furnace;
  updateCycler?: Maybe<Cycler>;
  updateCycler2: Cycler;
  updateCyclerChannel?: Maybe<CyclerChannel>;
  updateCyclerChannel2: CyclerChannel;
  updateElectrolyteIngredient?: Maybe<ElectrolyteIngredient>;
  updateElectrolyteIngredient2: ElectrolyteIngredient;
  update_electrolyte_recipe?: Maybe<ElectrolyteRecipe>;
  updateElectrolyteRecipe2: ElectrolyteRecipe;
  updateAdhesiveRecipe?: Maybe<AdhesiveRecipe>;
  updateAdhesiveRecipe2: AdhesiveRecipe;
  updateBatteryFile?: Maybe<BatteryFile>;
  /** Moves a battery build matrix into the specified stage of testing, returns null if the matrix does not exist or the stage is invalid; TODO do not use */
  advance_stage?: Maybe<BatteryBuildMatrix>;
  /** Moves a BatteryBuildMatrix to the step beyond the specified step, if the specified step is its current step */
  advanceStage: BatteryBuildMatrix;
  /** Updates a battery build matrix */
  update_battery_build_matrix?: Maybe<BatteryBuildMatrix>;
  updateBatteryBuildMatrix?: Maybe<BatteryBuildMatrix>;
  updateBatteryBuildMatrix2: BatteryBuildMatrix;
  deleteBatteryBuildMatrix: Scalars['Boolean'];
  /** @deprecated Use updateFurnaceProcess() */
  update_furnace_process?: Maybe<FurnaceProcess>;
  updateFurnaceProcess?: Maybe<FurnaceProcess>;
  updateFurnaceProcess2: FurnaceProcess;
  /** @deprecated Use updateWeldProcess() */
  update_weld_process?: Maybe<WeldProcess>;
  updateWeldProcess?: Maybe<WeldProcess>;
  updateWeldProcess2: WeldProcess;
  /** @deprecated Use updateWashProcess() */
  update_wash_process?: Maybe<WashProcess>;
  updateWashProcess?: Maybe<WashProcess>;
  updateWashProcess2: WashProcess;
  /** @deprecated Use updateElectrodeAssemblyProcess() */
  update_electrode_assembly_process?: Maybe<ElectrodeAssemblyProcess>;
  updateElectrodeAssemblyProcess?: Maybe<ElectrodeAssemblyProcess>;
  updateElectrodeAssemblyProcess2: ElectrodeAssemblyProcess;
  /** @deprecated Use updateFrameAssemblyProcess() */
  update_frame_assembly_process?: Maybe<FrameAssemblyProcess>;
  updateFrameAssemblyProcess?: Maybe<FrameAssemblyProcess>;
  updateFrameAssemblyProcess2: FrameAssemblyProcess;
  /** @deprecated Use updateFeltModificationProcess() */
  update_felt_modification_process?: Maybe<FeltModificationProcess>;
  updateFeltModificationProcess?: Maybe<FeltModificationProcess>;
  updateFeltModificationProcess2: FeltModificationProcess;
  /** @deprecated Use updateHardwareInfoRecordingProcess() */
  update_hardware_info_recording_process?: Maybe<HardwareInfoRecordingProcess>;
  updateHardwareInfoRecordingProcess?: Maybe<HardwareInfoRecordingProcess>;
  updateHardwareInfoRecordingProcess2: HardwareInfoRecordingProcess;
  /** @deprecated Use updatePressProcess() */
  update_press_process?: Maybe<PressProcess>;
  updatePressProcess?: Maybe<PressProcess>;
  updatePressProcess2: PressProcess;
  /** @deprecated Use updateDryBatteryTestProcess */
  update_dry_battery_test_process?: Maybe<DryBatteryTestProcess>;
  updateDryBatteryTestProcess?: Maybe<DryBatteryTestProcess>;
  updateDryBatteryTestProcess2: DryBatteryTestProcess;
  /** @deprecated Use createReworkProcess() */
  create_rework_process?: Maybe<ReworkProcess>;
  /** @deprecated Use updateReworkProcess() */
  update_rework_process?: Maybe<ReworkProcess>;
  createReworkProcess?: Maybe<ReworkProcess>;
  updateReworkProcess?: Maybe<ReworkProcess>;
  /** @deprecated Use updateElectrolyteFillingProcess */
  update_electrolyte_filling_process?: Maybe<ElectrolyteFillingProcess>;
  updateElectrolyteFillingProcess?: Maybe<ElectrolyteFillingProcess>;
  updateElectrolyteFillingProcess2: ElectrolyteFillingProcess;
  /** @deprecated Use wetBatteryTestProcess() */
  update_wet_battery_eis_test_process?: Maybe<WetBatteryEisTestProcess>;
  updateWetBatteryTestProcess?: Maybe<WetBatteryEisTestProcess>;
  updateWetBatteryTestProcess2: WetBatteryEisTestProcess;
  /** @deprecated Use updateAutopsyProcess */
  update_autopsy_process?: Maybe<FailureAnalysisAutopsyProcess>;
  updateAutopsyProcess?: Maybe<FailureAnalysisAutopsyProcess>;
  updateAutopsyProcess2: FailureAnalysisAutopsyProcess;
  /** @deprecated Use updateElectrolyteFillingSpec */
  update_electrolyte_filling_spec?: Maybe<ElectrolyteFillingSpec>;
  updateElectrolyteFillingSpec?: Maybe<ElectrolyteFillingSpec>;
  /** Update by process id + serial number, create by only serial number */
  updateLabTestProcess?: Maybe<LabTestProcess>;
  updateLabTestProcess2: LabTestProcess;
  updateBatteryPopulation: BatteryPopulation;
  updateBatteryPopulation2: BatteryPopulation;
  createBatteryPopulationsAndBatteriesOnNewExperiment?: Maybe<Experiment>;
  createBatteryPopulationsAndBatteriesOnExistingExperiment?: Maybe<Experiment>;
  createBatteriesOnNewPopulation: BatteryPopulation;
  createBatteriesOnExistingBatteryPopulation: BatteryPopulation;
  updateORingType: ORingType;
  updateORingType2: ORingType;
  createSiteInst?: Maybe<SiteInst>;
  updateSiteInst?: Maybe<SiteInst>;
  upsertSubgroupInst?: Maybe<SubgroupInst>;
  upsertBlockInst?: Maybe<BlockInst>;
  upsertStackInst?: Maybe<Array<Maybe<StackInst>>>;
  upsertStringInst?: Maybe<Array<Maybe<StringInst>>>;
  upsertBattery?: Maybe<Array<Maybe<Battery>>>;
  upsertBatteryInst?: Maybe<Array<Maybe<BatteryInst>>>;
  updateBatteryToReturnToAssembly?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateBatteryAssemblyApproved?: Maybe<Scalars['Boolean']>;
  updateBatteryAssemblyScrapped?: Maybe<Array<Maybe<Scalars['String']>>>;
  updateBatteryAssemblyQuarantined?: Maybe<Scalars['Boolean']>;
  submitBattery?: Maybe<Scalars['Boolean']>;
  quarantineBattery?: Maybe<Scalars['Boolean']>;
  addComment?: Maybe<Array<Maybe<BatteryCommentsView>>>;
  editComment?: Maybe<Array<Maybe<BatteryCommentsView>>>;
  deleteComment?: Maybe<Scalars['Boolean']>;
  addNotes?: Maybe<Array<Maybe<BatteryNotesView>>>;
  editNotes?: Maybe<Array<Maybe<BatteryNotesView>>>;
  deleteNotes?: Maybe<Scalars['Boolean']>;
  addLot?: Maybe<ManfacturingComponentLotResult>;
  /** Battery serial number as optional, need to be passed to handle versioning... */
  upsertWeldAndGenerateBatterySerialNumber?: Maybe<Scalars['String']>;
  upsertWeldingResultsAndPrinting?: Maybe<WeldingResultsAndPrinting>;
  /** @deprecated use submitBattery */
  submitBatteryWeldingStation?: Maybe<Scalars['Boolean']>;
  /** @deprecated use quarantineBattery */
  quarantineBatteryWeldingStation?: Maybe<Scalars['Boolean']>;
  upsertWeighingBusBar?: Maybe<WeighingBusBarOutput>;
  upsertWeighingGasChannel?: Maybe<WeighingGasChannelOutput>;
  upsertWeighingMeasure?: Maybe<WeighingMeasureOutput>;
  /** @deprecated use submitBattery */
  submitBatteryWeighingStation?: Maybe<Scalars['Boolean']>;
  /** @deprecated use quarantineBattery */
  quarantineBatteryWeighingStation?: Maybe<Scalars['Boolean']>;
  upsertGasChannelCover?: Maybe<GasChannelCoverOutput>;
  upsertOverChargeKit?: Maybe<OverChargeKitOutput>;
  upsertMmb?: Maybe<MmbOutput>;
  upsertFinalChecks?: Maybe<FinalChecksOutput>;
  /** @deprecated use quarantineBattery */
  quarantineBatteryFinalizationStation?: Maybe<Scalars['Boolean']>;
  /** @deprecated use submitBattery */
  submitBatteryFinalizationStation?: Maybe<Scalars['Boolean']>;
  updateMeasurementSpec?: Maybe<MeasurementSpecs>;
  upsertFillingOpd?: Maybe<FillingOpdOutput>;
  upsertFillingCellPressure?: Maybe<FillingCellPressureOutput>;
  upsertFillingHipot?: Maybe<FillingHipotOutput>;
  upsertFillingWeighing?: Maybe<FillingWeighingOutput>;
  upsertFillingElectrolyte?: Maybe<FillingElectrolyteOutput>;
  upsertFillingEis?: Maybe<FillingEisOutput>;
  /** @deprecated use submitBattery */
  submitBatteryFillingStation?: Maybe<Scalars['Boolean']>;
  /** @deprecated use quarantineBattery */
  quarantineBatteryFillingStation?: Maybe<Scalars['Boolean']>;
  upsertContainer: Scalars['ID'];
  updateContainerToApproved?: Maybe<Array<Maybe<ValidationResponse>>>;
  updateContainerToReturnToManufacturing?: Maybe<Array<Maybe<ValidationResponse>>>;
  assignLocationToContainer?: Maybe<Scalars['Boolean']>;
  upsertModelOptions?: Maybe<ModelOptionsOutput>;
  updateFabProcessAttribute?: Maybe<PlateFabProcessAttribute>;
  updateCompositeMaterial?: Maybe<CompositeMaterial>;
  upsertControllerCables?: Maybe<ControllerCablesOutput>;
  upsertBatteryInContainer?: Maybe<BatteryStackOutput>;
  upsertBatteryQc?: Maybe<BatteryStackQcOutput>;
  upsertStackSignOff?: Maybe<StackSignOffOutput>;
  upsertValidationRanges?: Maybe<ValidationRangesOutput>;
  upsertIqc?: Maybe<IqcOutput>;
  upsertFatQc?: Maybe<FatQcOutput>;
  upsertOqc?: Maybe<OqcOutput>;
  submitContainer?: Maybe<Scalars['Boolean']>;
  updateBatteryToReturnToAvailable?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** STACK_A/STACK_B */
  removeBatteryAsAvailable?: Maybe<Scalars['Boolean']>;
  /** STACK_A/STACK_B */
  removeBatteryAsQuarantine?: Maybe<Scalars['Boolean']>;
  sendContainerToAssembly?: Maybe<Scalars['Boolean']>;
  deleteContainer?: Maybe<Scalars['Boolean']>;
  quarantineContainer?: Maybe<Scalars['Boolean']>;
  updateUserUiState?: Maybe<UserUiState>;
};


export type MutationUpdateUserArgs = {
  update: UserUpdate;
};


export type MutationUpdateUser2Args = {
  update: UserUpdate;
};


export type MutationUpdateHoltecUsersArgs = {
  update: Array<Maybe<UserUpdate>>;
};


export type MutationUpdateUsersToInActiveArgs = {
  update: Array<Maybe<UserUpdate>>;
};


export type MutationValidateNullOrderingArgs = {
  ordering: NullOrdering;
};


export type MutationCreate_CollectionArgs = {
  name: Scalars['String'];
  filter?: Maybe<Scalars['String']>;
};


export type MutationDestroy_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicate_CollectionArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdate_CollectionArgs = {
  input: UpdateCollectionInput;
};


export type MutationPublish_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationUnpublish_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationFavorite_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationUnfavorite_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationSubscribe_To_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationUnsubscribe_From_CollectionArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateCollectionArgs = {
  update: UpdateBatteryTestCollectionInput;
};


export type MutationUpdateBatteryTestCollectionArgs = {
  update: UpdateBatteryTestCollectionInput;
};


export type MutationUpdateMfgBatteryCollectionArgs = {
  update: UpdateMfgBatteryCollectionInput;
};


export type MutationUpdateExperimentArgs = {
  update: ExperimentUpdate;
};


export type MutationUpdateExperiment2Args = {
  update: ExperimentUpdate;
};


export type MutationUpdateCellTypeArgs = {
  update: CellTypeUpdate;
};


export type MutationUpdateCellType2Args = {
  update: CellTypeUpdate;
};


export type MutationUpdateBatteryDesignArgs = {
  update: BatteryDesignUpdate;
};


export type MutationUpdate_Frame_Assembly_SpecArgs = {
  update: FrameAssemblySpecUpdate;
};


export type MutationUpdate_Adhesive_SpecArgs = {
  update: AdhesiveSpecUpdate;
};


export type MutationUpdate_Felt_SpecArgs = {
  update: FeltSpecUpdate;
};


export type MutationUpdatePlateTypeArgs = {
  update: PlateTypeUpdate;
};


export type MutationUpdatePlateType2Args = {
  update: PlateTypeUpdate;
};


export type MutationUpdateCyclingProgramArgs = {
  update: CyclingProgramUpdate;
};


export type MutationUpdateCyclingProgram2Args = {
  update: CyclingProgramUpdate;
};


export type MutationUpdateDepartmentArgs = {
  update: DepartmentUpdate;
};


export type MutationUpdateDepartment2Args = {
  update: DepartmentUpdate;
};


export type MutationUpdateSiteArgs = {
  update: SiteUpdate;
};


export type MutationUpdateSite2Args = {
  update: SiteUpdate;
};


export type MutationUpdateVendorArgs = {
  update: VendorUpdate;
};


export type MutationUpdateVendor2Args = {
  update: VendorUpdate;
};


export type MutationUpdatePartCategoryArgs = {
  update: PartCategoryUpdate;
};


export type MutationUpdatePartCategory2Args = {
  update: PartCategoryUpdate;
};


export type MutationUpdatePartManufacturerArgs = {
  update: PartManufacturerUpdate;
};


export type MutationUpdatePartManufacturer2Args = {
  update: PartManufacturerUpdate;
};


export type MutationUpdateFrameTypeArgs = {
  update: FrameTypeUpdate;
};


export type MutationUpdateFrameType2Args = {
  update: FrameTypeUpdate;
};


export type MutationUpdateFeltTypeArgs = {
  update: FeltTypeUpdate;
};


export type MutationUpdateFeltType2Args = {
  update: FeltTypeUpdate;
};


export type MutationUpdatePuckTypeArgs = {
  update: PuckTypeUpdate;
};


export type MutationUpdatePuckType2Args = {
  update: PuckTypeUpdate;
};


export type MutationUpdateFurnaceArgs = {
  update: FurnaceUpdate;
};


export type MutationUpdateFurnace2Args = {
  update: FurnaceUpdate;
};


export type MutationUpdateCyclerArgs = {
  update: CyclerUpdate;
};


export type MutationUpdateCycler2Args = {
  update: CyclerUpdate;
};


export type MutationUpdateCyclerChannelArgs = {
  update: CyclerChannelUpdate;
};


export type MutationUpdateCyclerChannel2Args = {
  update: CyclerChannelUpdate;
};


export type MutationUpdateElectrolyteIngredientArgs = {
  update: ElectrolyteIngredientUpdate;
};


export type MutationUpdateElectrolyteIngredient2Args = {
  update: ElectrolyteIngredientUpdate;
};


export type MutationUpdate_Electrolyte_RecipeArgs = {
  update: ElectrolyteRecipeUpdate;
};


export type MutationUpdateElectrolyteRecipe2Args = {
  update: ElectrolyteRecipeUpdate;
};


export type MutationUpdateAdhesiveRecipeArgs = {
  update: AdhesiveRecipeUpdate;
};


export type MutationUpdateAdhesiveRecipe2Args = {
  update: AdhesiveRecipeUpdate;
};


export type MutationUpdateBatteryFileArgs = {
  update: BatteryFileUpdate;
};


export type MutationAdvance_StageArgs = {
  battery_serial_number: Scalars['String'];
  stage: Scalars['String'];
};


export type MutationAdvanceStageArgs = {
  batterySerialNumber: Scalars['String'];
  currentStage: Scalars['String'];
};


export type MutationUpdate_Battery_Build_MatrixArgs = {
  update: BatteryBuildMatrixUpdate;
};


export type MutationUpdateBatteryBuildMatrixArgs = {
  update: BatteryBuildMatrixUpdate;
};


export type MutationUpdateBatteryBuildMatrix2Args = {
  update: BatteryBuildMatrixUpdate;
};


export type MutationDeleteBatteryBuildMatrixArgs = {
  serialNumber: Scalars['String'];
};


export type MutationUpdate_Furnace_ProcessArgs = {
  update: FurnaceProcessUpdate;
};


export type MutationUpdateFurnaceProcessArgs = {
  update: FurnaceProcessUpdate;
};


export type MutationUpdateFurnaceProcess2Args = {
  update: FurnaceProcessUpdate;
};


export type MutationUpdate_Weld_ProcessArgs = {
  update: WeldProcessUpdate;
};


export type MutationUpdateWeldProcessArgs = {
  update: WeldProcessUpdate;
};


export type MutationUpdateWeldProcess2Args = {
  update: WeldProcessUpdate;
};


export type MutationUpdate_Wash_ProcessArgs = {
  update: WashProcessUpdate;
};


export type MutationUpdateWashProcessArgs = {
  update: WashProcessUpdate;
};


export type MutationUpdateWashProcess2Args = {
  update: WashProcessUpdate;
};


export type MutationUpdate_Electrode_Assembly_ProcessArgs = {
  update: ElectrodeAssemblyProcessUpdate;
};


export type MutationUpdateElectrodeAssemblyProcessArgs = {
  update: ElectrodeAssemblyProcessUpdate;
};


export type MutationUpdateElectrodeAssemblyProcess2Args = {
  update: ElectrodeAssemblyProcessUpdate;
};


export type MutationUpdate_Frame_Assembly_ProcessArgs = {
  update: FrameAssemblyProcessUpdate;
};


export type MutationUpdateFrameAssemblyProcessArgs = {
  update: FrameAssemblyProcessUpdate;
};


export type MutationUpdateFrameAssemblyProcess2Args = {
  update: FrameAssemblyProcessUpdate;
};


export type MutationUpdate_Felt_Modification_ProcessArgs = {
  update: FeltModificationProcessUpdate;
};


export type MutationUpdateFeltModificationProcessArgs = {
  update: FeltModificationProcessUpdate;
};


export type MutationUpdateFeltModificationProcess2Args = {
  update: FeltModificationProcessUpdate;
};


export type MutationUpdate_Hardware_Info_Recording_ProcessArgs = {
  update: HardwareInfoRecordingProcessUpdate;
};


export type MutationUpdateHardwareInfoRecordingProcessArgs = {
  update: HardwareInfoRecordingProcessUpdate;
};


export type MutationUpdateHardwareInfoRecordingProcess2Args = {
  update: HardwareInfoRecordingProcessUpdate;
};


export type MutationUpdate_Press_ProcessArgs = {
  update: PressProcessUpdate;
};


export type MutationUpdatePressProcessArgs = {
  update: PressProcessUpdate;
};


export type MutationUpdatePressProcess2Args = {
  update: PressProcessUpdate;
};


export type MutationUpdate_Dry_Battery_Test_ProcessArgs = {
  update: DryBatteryTestProcessUpdate;
};


export type MutationUpdateDryBatteryTestProcessArgs = {
  update: DryBatteryTestProcessUpdate;
};


export type MutationUpdateDryBatteryTestProcess2Args = {
  update: DryBatteryTestProcessUpdate;
};


export type MutationCreate_Rework_ProcessArgs = {
  update: ReworkProcessUpdate;
};


export type MutationUpdate_Rework_ProcessArgs = {
  update: ReworkProcessUpdate;
};


export type MutationCreateReworkProcessArgs = {
  update: ReworkProcessUpdate;
};


export type MutationUpdateReworkProcessArgs = {
  update: ReworkProcessUpdate;
};


export type MutationUpdate_Electrolyte_Filling_ProcessArgs = {
  update: ElectrolyteFillingProcessUpdate;
};


export type MutationUpdateElectrolyteFillingProcessArgs = {
  update: ElectrolyteFillingProcessUpdate;
};


export type MutationUpdateElectrolyteFillingProcess2Args = {
  update: ElectrolyteFillingProcessUpdate;
};


export type MutationUpdate_Wet_Battery_Eis_Test_ProcessArgs = {
  update: WetBatteryEisTestProcessUpdate;
};


export type MutationUpdateWetBatteryTestProcessArgs = {
  update: WetBatteryEisTestProcessUpdate;
};


export type MutationUpdateWetBatteryTestProcess2Args = {
  update: WetBatteryEisTestProcessUpdate;
};


export type MutationUpdate_Autopsy_ProcessArgs = {
  update: FailureAnalysisAutopsyProcessUpdate;
};


export type MutationUpdateAutopsyProcessArgs = {
  update: FailureAnalysisAutopsyProcessUpdate;
};


export type MutationUpdateAutopsyProcess2Args = {
  update: FailureAnalysisAutopsyProcessUpdate;
};


export type MutationUpdate_Electrolyte_Filling_SpecArgs = {
  update: ElectrolyteFillingSpecUpdate;
};


export type MutationUpdateElectrolyteFillingSpecArgs = {
  update: ElectrolyteFillingSpecUpdate;
};


export type MutationUpdateLabTestProcessArgs = {
  update: LabTestProcessUpdate;
};


export type MutationUpdateLabTestProcess2Args = {
  update: LabTestProcessUpdate;
};


export type MutationUpdateBatteryPopulationArgs = {
  update: BatteryPopulationUpdate;
};


export type MutationUpdateBatteryPopulation2Args = {
  update: BatteryPopulationUpdate;
};


export type MutationCreateBatteryPopulationsAndBatteriesOnNewExperimentArgs = {
  experimentId: Scalars['ID'];
  populationAndBatteries: Array<BatchPopulationAndBatteriesUpdate>;
};


export type MutationCreateBatteryPopulationsAndBatteriesOnExistingExperimentArgs = {
  experimentId: Scalars['ID'];
  populationAndBatteries: Array<BatchPopulationAndBatteriesUpdate>;
};


export type MutationCreateBatteriesOnNewPopulationArgs = {
  experimentId: Scalars['ID'];
  populationName: Scalars['ID'];
  batteries: BatchBatteriesUpdate;
};


export type MutationCreateBatteriesOnExistingBatteryPopulationArgs = {
  populationId: Scalars['ID'];
  batteries: BatchBatteriesUpdate;
};


export type MutationUpdateORingTypeArgs = {
  update: ORingTypeUpdate;
};


export type MutationUpdateORingType2Args = {
  update: ORingTypeUpdate;
};


export type MutationCreateSiteInstArgs = {
  create: SiteInstInput;
};


export type MutationUpdateSiteInstArgs = {
  siteId: Scalars['Int'];
  update: SiteInstInput;
};


export type MutationUpsertSubgroupInstArgs = {
  create: SubgroupInstInput;
};


export type MutationUpsertBlockInstArgs = {
  create: BlockInstInput;
};


export type MutationUpsertStackInstArgs = {
  create: Array<Maybe<StackInstInput>>;
};


export type MutationUpsertStringInstArgs = {
  create: Array<Maybe<StringInstInput>>;
};


export type MutationUpsertBatteryArgs = {
  create: Array<Maybe<BatteryInput>>;
};


export type MutationUpsertBatteryInstArgs = {
  create: Array<Maybe<BatteryInstInput>>;
};


export type MutationUpdateBatteryToReturnToAssemblyArgs = {
  updateInput: BatteryAdminUpdateAssemblyInput;
  useCase: UseCase;
};


export type MutationUpdateBatteryAssemblyApprovedArgs = {
  updateInput: BatteryAdminUpdateAssemblyInput;
  useCase: UseCase;
};


export type MutationUpdateBatteryAssemblyScrappedArgs = {
  updateInput: BatteryAdminUpdateAssemblyInput;
};


export type MutationUpdateBatteryAssemblyQuarantinedArgs = {
  updateInput: BatteryAdminUpdateAssemblyInput;
};


export type MutationSubmitBatteryArgs = {
  serialNumber: Scalars['String'];
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationQuarantineBatteryArgs = {
  serialNumber: Scalars['String'];
  dateTime: Scalars['Timestamp'];
  comments?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationAddCommentArgs = {
  serialNumber?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};


export type MutationEditCommentArgs = {
  serialNumber?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  commentId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteCommentArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationAddNotesArgs = {
  serialNumber?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};


export type MutationEditNotesArgs = {
  serialNumber?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  commentId: Scalars['ID'];
};


export type MutationDeleteNotesArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationAddLotArgs = {
  mfgComponentLot?: Maybe<ManfacturingComponentLotInput>;
};


export type MutationUpsertWeldAndGenerateBatterySerialNumberArgs = {
  frameTraceabilityInput?: Maybe<FrameTraceabilityInput>;
  batterySerialNumber?: Maybe<Scalars['String']>;
};


export type MutationUpsertWeldingResultsAndPrintingArgs = {
  weldingResultsAndPrintingInput?: Maybe<WeldingResultsAndPrintingInput>;
};


export type MutationSubmitBatteryWeldingStationArgs = {
  serialNumber?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationQuarantineBatteryWeldingStationArgs = {
  serialNumber: Scalars['String'];
  dateTime: Scalars['Timestamp'];
  comments?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationUpsertWeighingBusBarArgs = {
  weighingBusBar?: Maybe<WeighingBusBarInput>;
};


export type MutationUpsertWeighingGasChannelArgs = {
  weighingGasChannel?: Maybe<WeighingGasChannelInput>;
};


export type MutationUpsertWeighingMeasureArgs = {
  weighingMeasure?: Maybe<WeighingMeasureInput>;
};


export type MutationSubmitBatteryWeighingStationArgs = {
  batterySerialNumber: Scalars['String'];
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationQuarantineBatteryWeighingStationArgs = {
  serialNumber: Scalars['String'];
  dateTime: Scalars['Timestamp'];
  comments?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationUpsertGasChannelCoverArgs = {
  gasChannelCoverInput?: Maybe<GasChannelCoverInput>;
};


export type MutationUpsertOverChargeKitArgs = {
  overChargeKitInput?: Maybe<OverChargeKitInput>;
};


export type MutationUpsertMmbArgs = {
  mmbInput?: Maybe<MmbInput>;
};


export type MutationUpsertFinalChecksArgs = {
  finalChecksInput?: Maybe<FinalChecksInput>;
};


export type MutationQuarantineBatteryFinalizationStationArgs = {
  serialNumber: Scalars['String'];
  dateTime: Scalars['Timestamp'];
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationSubmitBatteryFinalizationStationArgs = {
  serialNumber: Scalars['String'];
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationUpdateMeasurementSpecArgs = {
  update?: Maybe<MeasurementSpecsInput>;
};


export type MutationUpsertFillingOpdArgs = {
  fillingInput?: Maybe<FillingOpdInput>;
};


export type MutationUpsertFillingCellPressureArgs = {
  fillingCellPressure?: Maybe<FillingCellPressureInput>;
};


export type MutationUpsertFillingHipotArgs = {
  fillingHipot?: Maybe<FillingHipotInput>;
};


export type MutationUpsertFillingWeighingArgs = {
  fillingWeighing?: Maybe<FillingWeighingInput>;
};


export type MutationUpsertFillingElectrolyteArgs = {
  fillingElectrolyte?: Maybe<FillingElectrolyteInput>;
};


export type MutationUpsertFillingEisArgs = {
  fillingEis?: Maybe<FillingEisInput>;
};


export type MutationSubmitBatteryFillingStationArgs = {
  serialNumber?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationQuarantineBatteryFillingStationArgs = {
  serialNumber: Scalars['String'];
  dateTime: Scalars['Timestamp'];
  comments?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationUpsertContainerArgs = {
  id?: Maybe<Scalars['ID']>;
  containerSerialNumber: Scalars['String'];
  modelNumber: Scalars['String'];
  location: ContainerLocations;
  useCase: UseCase;
  isUl: Scalars['Boolean'];
};


export type MutationUpdateContainerToApprovedArgs = {
  containerSerialNumbers: Array<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
};


export type MutationUpdateContainerToReturnToManufacturingArgs = {
  containerSerialNumbers: Array<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
};


export type MutationAssignLocationToContainerArgs = {
  containerSerialNumbers: Array<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  instructions?: Maybe<Scalars['String']>;
};


export type MutationUpsertModelOptionsArgs = {
  modeloptions?: Maybe<ModelOptionsInput>;
};


export type MutationUpdateFabProcessAttributeArgs = {
  update: PlateFabProcessAttributeUpdate;
};


export type MutationUpdateCompositeMaterialArgs = {
  update: CompositeMaterialUpdate;
};


export type MutationUpsertControllerCablesArgs = {
  controllerCables?: Maybe<ControllerCablesInput>;
};


export type MutationUpsertBatteryInContainerArgs = {
  batteryStack?: Maybe<BatteryStackInput>;
  stack: Stack;
};


export type MutationUpsertBatteryQcArgs = {
  batteryStackQc?: Maybe<BatteryStackQcInput>;
  stack: Stack;
};


export type MutationUpsertStackSignOffArgs = {
  stackSignOff?: Maybe<StackSignOffInput>;
  stack: Stack;
};


export type MutationUpsertValidationRangesArgs = {
  validationRange?: Maybe<ValidationRangesInput>;
};


export type MutationUpsertIqcArgs = {
  iqc?: Maybe<IqcInput>;
};


export type MutationUpsertFatQcArgs = {
  fatQc?: Maybe<FatQcInput>;
};


export type MutationUpsertOqcArgs = {
  oqc?: Maybe<OqcInput>;
};


export type MutationSubmitContainerArgs = {
  containerSerialNumber?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
  comments?: Maybe<Scalars['String']>;
};


export type MutationUpdateBatteryToReturnToAvailableArgs = {
  updateInput: BatteryAdminUpdateAssemblyInput;
  useCase: UseCase;
};


export type MutationRemoveBatteryAsAvailableArgs = {
  batteryStack?: Maybe<BatteryStackInput>;
  stack: Stack;
  useCase: UseCase;
  isFormationComplete?: Maybe<Scalars['Boolean']>;
};


export type MutationRemoveBatteryAsQuarantineArgs = {
  batteryStack?: Maybe<BatteryStackInput>;
  removeAsQuarantine?: Maybe<RemoveAsQuarantineInput>;
  stack: Stack;
};


export type MutationSendContainerToAssemblyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContainerArgs = {
  id: Scalars['ID'];
};


export type MutationQuarantineContainerArgs = {
  serialNumber: Scalars['String'];
  dateTime: Scalars['Timestamp'];
  comments?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationUpdateUserUiStateArgs = {
  update: UpdateUserUiState;
};

export enum NullOrdering {
  First = 'FIRST',
  Last = 'LAST'
}

export type ORingType = {
  __typename?: 'ORingType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['Int']>;
  vendor?: Maybe<Vendor>;
};

export type ORingTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'ORingTypeQueryEngineResult';
  results: Array<ORingType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type ORingTypeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['Int']>;
};

export type OldBatteryTest = {
  __typename?: 'OldBatteryTest';
  /** The battery's description */
  batteryBuildMatrix?: Maybe<BatteryBuildMatrix>;
  /** HDF5 Groupings + their started_at timestamps */
  metadata?: Maybe<Array<BatteryTestMetadata>>;
  /** The test cycles this battery has undergone */
  cycles?: Maybe<Array<BatteryTestCycle>>;
  /** The most recent test cycle this battery has undergone; only valid for a non-grouped BatteryTest */
  latestCycle?: Maybe<BatteryTestCycle>;
  /** The average of the most recent 5 cycles this battery has undergone; only valid for a non-grouped BatteryTest */
  averageOfLatestFiveCycles?: Maybe<BatteryTestCycle>;
  /** EE(N-5), where N is the index of latest cycle */
  latestEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  /** EE25, or EE0, depending on the information source */
  initialEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  /** EE100, or EE1, depending on the information source */
  hundredthEnergyEfficiencyMain?: Maybe<Scalars['Float']>;
  /** This battery's composite score */
  compositeScore?: Maybe<Scalars['Float']>;
  /** The uncertainty in the composite score */
  compositeScoreDelta?: Maybe<Scalars['Float']>;
  /** The composite score adjusted for the worst case */
  compositeScoreMinimum?: Maybe<Scalars['Float']>;
  /** The composite score adjusted for the best case */
  compositeScoreMaximum?: Maybe<Scalars['Float']>;
  ohmicResistance?: Maybe<Scalars['Float']>;
  testsStartedAt?: Maybe<Scalars['Timestamp']>;
  testsEndedAt?: Maybe<Scalars['Timestamp']>;
  cycleCount?: Maybe<Scalars['Int']>;
};


export type OldBatteryTestCyclesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortColumn?: Maybe<Scalars['String']>;
  sortDirection?: Maybe<Direction>;
};

export type OqcInput = {
  containerSerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  approvedBy1?: Maybe<Scalars['ID']>;
  approvedBy2?: Maybe<Scalars['ID']>;
  approvedBy3?: Maybe<Scalars['ID']>;
  approvedBy4?: Maybe<Scalars['ID']>;
  approvedAt?: Maybe<Scalars['Timestamp']>;
};

export type OqcOutput = ContainerSignOffFields & {
  __typename?: 'OqcOutput';
  containerSerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  deviation?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  approvedBy1?: Maybe<Scalars['ID']>;
  approvedUserName1?: Maybe<Scalars['String']>;
  approvedBy2?: Maybe<Scalars['ID']>;
  approvedUserName2?: Maybe<Scalars['String']>;
  approvedBy3?: Maybe<Scalars['ID']>;
  approvedUserName3?: Maybe<Scalars['String']>;
  approvedBy4?: Maybe<Scalars['ID']>;
  approvedUserName4?: Maybe<Scalars['String']>;
  approvedAt?: Maybe<Scalars['Timestamp']>;
};

export type Ordering = {
  property: Scalars['String'];
  direction: Direction;
};

export type OrderingInput = {
  property: Scalars['String'];
  direction: Direction;
  nullOrdering?: Maybe<NullOrdering>;
};

export type OverChargeKitInput = {
  ulFrontValveSerialNumber?: Maybe<Scalars['String']>;
  ulFrontLowVentPressure?: Maybe<Scalars['Float']>;
  ulFrontHighVentPressure?: Maybe<Scalars['Float']>;
  ulBackValveSerialNumber?: Maybe<Scalars['String']>;
  ulBackLowVentPressure?: Maybe<Scalars['Float']>;
  ulBackHighVentPressure?: Maybe<Scalars['Float']>;
  ulFrontTorqueForce?: Maybe<Scalars['Float']>;
  ulBackTorqueForce?: Maybe<Scalars['Float']>;
  ulOverchargekitPressureLoss?: Maybe<Scalars['Float']>;
  ulOverchargekitTestPressure?: Maybe<Scalars['Float']>;
  nonUlValveSerialNumber?: Maybe<Scalars['String']>;
  nonUlLowVentPressure?: Maybe<Scalars['Float']>;
  nonUlHighVentPressure?: Maybe<Scalars['Float']>;
  nonUlFrontTorqueForce?: Maybe<Scalars['Float']>;
  nonUlBackTorqueForce?: Maybe<Scalars['Float']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ul?: Maybe<Scalars['Boolean']>;
  ulOverChargeKitLots?: Maybe<Array<Maybe<LotNumbersInput>>>;
  nonUlOverChargeKitLots?: Maybe<Array<Maybe<LotNumbersInput>>>;
};

export type OverChargeKitOutput = {
  __typename?: 'OverChargeKitOutput';
  assemblyLine?: Maybe<Scalars['Int']>;
  ulFrontValveSerialNumber?: Maybe<Scalars['String']>;
  ulFrontLowVentPressure?: Maybe<Scalars['Float']>;
  ulFrontHighVentPressure?: Maybe<Scalars['Float']>;
  ulBackValveSerialNumber?: Maybe<Scalars['String']>;
  ulBackLowVentPressure?: Maybe<Scalars['Float']>;
  ulBackHighVentPressure?: Maybe<Scalars['Float']>;
  ulFrontTorqueForce?: Maybe<Scalars['Float']>;
  ulBackTorqueForce?: Maybe<Scalars['Float']>;
  ulOverchargekitPressureLoss?: Maybe<Scalars['Float']>;
  ulOverchargekitTestPressure?: Maybe<Scalars['Float']>;
  nonUlValveSerialNumber?: Maybe<Scalars['String']>;
  nonUlLowVentPressure?: Maybe<Scalars['Float']>;
  nonUlHighVentPressure?: Maybe<Scalars['Float']>;
  nonUlFrontTorqueForce?: Maybe<Scalars['Float']>;
  nonUlBackTorqueForce?: Maybe<Scalars['Float']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  ul?: Maybe<Scalars['Boolean']>;
  ulOverChargeKitLots?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  nonUlOverChargeKitLots?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  deviation?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PaginationInput = {
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type PartCategory = {
  __typename?: 'PartCategory';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The name of this part category */
  name: Scalars['String'];
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
};

/** The typed result of invoking the PartCategory query engine */
export type PartCategoryQueryEngineResult = QueryEngineResult & {
  __typename?: 'PartCategoryQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<PartCategory>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type PartCategoryUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PartManufacturer = {
  __typename?: 'PartManufacturer';
  /** The id of the vendor from which a part category is purchased */
  vendorId: Scalars['ID'];
  /** The vendor from which a part category is purchased */
  vendor: Vendor;
  /**
   * The part category purchased from a vendor
   * @deprecated Use camel-case variant
   */
  part_category: PartCategory;
  partCategoryId: Scalars['ID'];
  partCategory: PartCategory;
};

/** The typed result of invoking the PartManufacturer query engine */
export type PartManufacturerQueryEngineResult = QueryEngineResult & {
  __typename?: 'PartManufacturerQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<PartManufacturer>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type PartManufacturerUpdate = {
  vendorId: Scalars['ID'];
  partCategoryId: Scalars['ID'];
};

export type PlateFabProcessAttrType = {
  __typename?: 'PlateFabProcessAttrType';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PlateFabProcessAttrTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'PlateFabProcessAttrTypeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<PlateFabProcessAttrType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type PlateFabProcessAttribute = {
  __typename?: 'PlateFabProcessAttribute';
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  typeInfo?: Maybe<PlateFabProcessAttrType>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
};

export type PlateFabProcessAttributeQueryEngineResult = QueryEngineResult & {
  __typename?: 'PlateFabProcessAttributeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<PlateFabProcessAttribute>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type PlateFabProcessAttributeUpdate = {
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type PlateType = {
  __typename?: 'PlateType';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The name of this plate type */
  name: Scalars['String'];
  /** The id of the vendor from which it was purchased */
  vendorId?: Maybe<Scalars['ID']>;
  /** The vendor from which it was purchased */
  vendor?: Maybe<Vendor>;
  classInfo?: Maybe<PlateTypeClass>;
  press?: Maybe<PlateFabProcessAttribute>;
  moldDesign?: Maybe<PlateFabProcessAttribute>;
  upperMoldBlock?: Maybe<PlateFabProcessAttribute>;
  lowerMoldBlock?: Maybe<PlateFabProcessAttribute>;
  plasticInput?: Maybe<PlateFabProcessAttribute>;
  aggregatorInput?: Maybe<PlateFabProcessAttribute>;
  texturingInterleaf?: Maybe<PlateFabProcessAttribute>;
  cooling?: Maybe<PlateFabProcessAttribute>;
  postProcessing?: Maybe<PlateFabProcessAttribute>;
  platenTemperature?: Maybe<Scalars['Float']>;
  moldingPressure?: Maybe<Scalars['Float']>;
  moldingTime?: Maybe<Scalars['Float']>;
  otherRequirements?: Maybe<Scalars['String']>;
  compositeMaterial?: Maybe<CompositeMaterial>;
  /**
   * The plate type's specification; TODO rename to 'details'
   * @deprecated Use 'details'
   */
  detailed_spec: Scalars['String'];
  details: Scalars['String'];
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
};

export type PlateTypeClass = {
  __typename?: 'PlateTypeClass';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** The typed result of invoking the PlateType query engine */
export type PlateTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'PlateTypeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<PlateType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type PlateTypeUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  vendorId?: Maybe<Scalars['ID']>;
  detailedSpec?: Maybe<Scalars['String']>;
  classId?: Maybe<Scalars['ID']>;
  press?: Maybe<Scalars['Int']>;
  moldDesign?: Maybe<Scalars['Int']>;
  upperMoldBlock?: Maybe<Scalars['Int']>;
  lowerMoldBlock?: Maybe<Scalars['Int']>;
  plasticInput?: Maybe<Scalars['Int']>;
  aggregatorInput?: Maybe<Scalars['Int']>;
  texturingInterleaf?: Maybe<Scalars['Int']>;
  platenTemperature?: Maybe<Scalars['Float']>;
  moldingPressure?: Maybe<Scalars['Float']>;
  moldingTime?: Maybe<Scalars['Float']>;
  cooling?: Maybe<Scalars['Int']>;
  postProcessing?: Maybe<Scalars['Int']>;
  materialId?: Maybe<Scalars['Int']>;
  otherRequirements?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type Predicate = {
  __typename?: 'Predicate';
  operator?: Maybe<PredicateOperator>;
  conditions?: Maybe<Array<Condition>>;
  subPredicates?: Maybe<Array<Predicate>>;
};

export type PredicateInput = {
  operator?: Maybe<PredicateOperator>;
  conditions?: Maybe<Array<ConditionInput>>;
  subPredicates?: Maybe<Array<PredicateInput>>;
};

export enum PredicateOperator {
  Not = 'NOT',
  And = 'AND',
  Or = 'OR'
}

export type PressProcess = {
  __typename?: 'PressProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /** @deprecated Use camel-case variant */
  has_abnormal_torque?: Maybe<Scalars['Boolean']>;
  hasAbnormalTorque?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use camel-case variant */
  bolt_torques?: Maybe<Scalars['String']>;
  boltTorques?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  /** @deprecated Use camel-case variant */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  torque_applied_at?: Maybe<Scalars['Timestamp']>;
  torqueAppliedAt?: Maybe<Scalars['Timestamp']>;
};

export type PressProcessUpdate = {
  battery_serial_number: Scalars['String'];
  has_abnormal_torque?: Maybe<Scalars['Boolean']>;
  /** JSON */
  bolt_torques?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  torque_applied_at?: Maybe<Scalars['Timestamp']>;
  operator_id?: Maybe<Scalars['ID']>;
};

export type PuckType = {
  __typename?: 'PuckType';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * A secondary identifier
   * @deprecated Use camel-case variant
   */
  design_id: Scalars['String'];
  designId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** A description */
  description?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  activeUsageCount: Scalars['Int'];
  locked: Scalars['Boolean'];
};

/** The typed result of invoking the PuckType query engine */
export type PuckTypeQueryEngineResult = QueryEngineResult & {
  __typename?: 'PuckTypeQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<PuckType>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type PuckTypeUpdate = {
  id?: Maybe<Scalars['ID']>;
  designId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  lock?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated use usersByEngine() */
  users: Array<User>;
  /** @deprecated use usersByEngine() */
  users_with_initials: Array<User>;
  /** @deprecated use usersByEngine() */
  usersWithEmailLike: Array<User>;
  /** @deprecated use usersByEngine() */
  usersSortedByFirstName: Array<User>;
  /** @deprecated use usersByEngine() */
  usersByIsActive: Array<User>;
  /** @deprecated use whoAmI() */
  current_user: User;
  /** Returns the current user */
  whoAmI: User;
  /** Returns the User with the given id */
  userById: User;
  /** Returns a possibly filtered, sorted, and paginated list of Users */
  usersByEngine: UserQueryEngineResult;
  /** Returns the User query engine's referenceable properties */
  usersProperties: Array<Scalars['String']>;
  usersByEngineWithPermissions: Array<User>;
  validateOrdering: Scalars['Boolean'];
  /** Return all collections */
  mfgBatteryCollections: Array<MfgBatteryCollection>;
  /** Return a single collection */
  mfgBatteryCollection?: Maybe<MfgBatteryCollection>;
  /** Actually returns the fields of BatteryTest, not Collection, but that's what collection queries for */
  mfgBatteryCollectionQueryOptionsFields: Array<Scalars['String']>;
  /** batteryCount */
  countMfgBatteryCollection?: Maybe<CollectionCard>;
  /**
   * Return all collections
   * @deprecated use batteryTestCollections(CollectionsScope)
   */
  collections: Array<BatteryTestCollection>;
  batteryTestCollections: Array<BatteryTestCollection>;
  /**
   * Return a single collection
   * @deprecated use batteryTestCollection(ID!)
   */
  collection?: Maybe<BatteryTestCollection>;
  batteryTestCollection?: Maybe<BatteryTestCollection>;
  /**
   * Actually returns the fields of BatteryTest, not Collection, but that's what collection queries for
   * @deprecated use batteryTestCollectionQueryOptionsFields([String])
   */
  collectionQueryOptionsFields: Array<Scalars['String']>;
  batteryTestCollectionQueryOptionsFields: Array<Scalars['String']>;
  /**
   * batteryCount
   * @deprecated use countBatteryTestCollection(ID!)
   */
  batteryCountByCollection?: Maybe<CollectionCard>;
  countBatteryTestCollection?: Maybe<CollectionCard>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestMetadata */
  batteryTestMetadatasByEngine: BatteryTestMetadataQueryEngineResult;
  /** Returns the BatteryTestMetadata query engine's referenceable properties */
  batteryTestMetadatasProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTest */
  batteryTestsByEngine: BatteryTestQueryEngineResult;
  /** Returns the BatteryTest query engine's referenceable properties */
  batteryTestsProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByExperiment */
  batteryTestsByExperimentsByEngine: BatteryTestsByExperimentQueryEngineResult;
  /** Returns the BatteryTestsByExperiment query engine's referenceable properties */
  batteryTestsByExperimentsProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByExperiment */
  batteryTestsByCellTypesByEngine: BatteryTestsByCellTypeQueryEngineResult;
  /** Returns the BatteryTestsByExperiment query engine's referenceable properties */
  batteryTestsByCellTypesProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByExperiment */
  batteryTestsByFeltTypesByEngine: BatteryTestsByFeltTypeQueryEngineResult;
  /** Returns the BatteryTestsByExperiment query engine's referenceable properties */
  batteryTestsByFeltTypesProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByPopulations */
  batteryTestsByPopulationsByEngine: BatteryTestsByPopulationQueryEngineResult;
  /** Returns the BatteryTestsByPopulation query engine's referenceable properties */
  batteryTestsByPopulationsProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByCyclingProgram */
  batteryTestsByCyclingProgramsByEngine: BatteryTestsByCyclingProgramQueryEngineResult;
  /** Returns the BatteryTestsByCyclingProgram query engine's referenceable properties */
  batteryTestsByCyclingProgramsProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByCyclingProgram */
  batteryTestsByElectrolyteRecipesByEngine: BatteryTestsByElectrolyteRecipeQueryEngineResult;
  /** Returns the BatteryTestsByCyclingProgram query engine's referenceable properties */
  batteryTestsByElectrolyteRecipesProperties: Array<Scalars['String']>;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestsByCyclingProgram */
  batteryTestsByExperimentAndPopulationsByEngine: BatteryTestsByExperimentAndPopulationQueryEngineResult;
  /** Returns the BatteryTestsByCyclingProgram query engine's referenceable properties */
  batteryTestsByExperimentAndPopulationsProperties: Array<Scalars['String']>;
  latestBatteryTestCycle?: Maybe<BatteryTestCycle>;
  averageOfLatestFiveBatteryTestCycles?: Maybe<BatteryTestCycle>;
  /** Returns the BatteryTestCycle with the given id */
  batteryTestCycleById: BatteryTestCycle;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryTestCycles */
  batteryTestCyclesByEngine: BatteryTestCycleQueryEngineResult;
  /** Returns the BatteryTestCycle query engine's referenceable properties */
  batteryTestCyclesProperties: Array<Scalars['String']>;
  /** @deprecated use experimentsByEngine() */
  experiments: Array<Experiment>;
  /** @deprecated use experimentsByEngine() */
  experimentsByIsActive: Array<Experiment>;
  /** @deprecated use experimentById() */
  experiment?: Maybe<Experiment>;
  /** Returns an experiment with the given id */
  experimentById: Experiment;
  /** Returns a possibly filtered, sorted, and paginated list of experiments */
  experimentsByEngine: ExperimentQueryEngineResult;
  /** Returns the Experiment query engine's referenceable properties */
  experimentsProperties: Array<Scalars['String']>;
  /** @deprecated use cellTypesByEngine() */
  cell_types: Array<CellType>;
  /** @deprecated use cellTypesByEngine() */
  cell_type?: Maybe<CellType>;
  /** @deprecated use cellTypesByEngine() */
  cellTypes: Array<CellType>;
  /** @deprecated use cellTypesByEngine() */
  cellTypesByIsActive: Array<CellType>;
  /** @deprecated use cellTypesByEngine() */
  cellTypes2: Array<CellType>;
  /** @deprecated use cellTypesByEngine() */
  cellTypeQueryableProperties: Array<Scalars['String']>;
  /** Returns a cell type with the given id */
  cellTypeById?: Maybe<CellType>;
  /** Returns a possibly filtered, sorted, and paginated list of CellTypes */
  cellTypesByEngine: CellTypeQueryEngineResult;
  /** Returns the CellType query engine's referenceable properties */
  cellTypesProperties: Array<Scalars['String']>;
  /**
   * Get all battery designs
   * @deprecated Use batteryDesigns(nameLike: null, revisionLike: null)
   */
  battery_designs: Array<BatteryDesign>;
  /**
   * Get a battery design
   * @deprecated Use batteryDesigns(nameLike: name, revisionLike: null)
   */
  battery_design?: Maybe<BatteryDesign>;
  /** Returns all battery designs with similar names and revisions */
  batteryDesigns: Array<BatteryDesign>;
  batteryDesignById?: Maybe<BatteryDesign>;
  batteryDesignsByIsActive: Array<BatteryDesign>;
  /** Get all frame assembly specs */
  frame_assembly_specs: Array<FrameAssemblySpec>;
  /** Get a specific frame assembly spec */
  frameAssemblySpec?: Maybe<FrameAssemblySpec>;
  /** Get adhesive specs with a similar name and revision */
  adhesiveSpecs: Array<AdhesiveSpec>;
  feltSpecs: Array<FeltSpec>;
  /** @deprecated use plateTypesByEngine() */
  plate_types: Array<PlateType>;
  /** @deprecated use plateTypeById() */
  plate_type?: Maybe<PlateType>;
  /** @deprecated use plateTypesByEngine() */
  plateTypes: Array<PlateType>;
  /** @deprecated use plateTypesByEngine() */
  plateTypesByIsActive: Array<PlateType>;
  /** Returns the plate type with the given id */
  plateTypeById: PlateType;
  /** Returns a possibly filtered, sorted, and paginated list of PlateTypes */
  plateTypesByEngine: PlateTypeQueryEngineResult;
  /** Returns the PlateType query engine's referenceable properties */
  plateTypesProperties: Array<Scalars['String']>;
  /** @deprecated use cyclingProgramsByEngine() */
  cycling_programs: Array<CyclingProgram>;
  /** @deprecated use cyclingProgramById() */
  cycling_program?: Maybe<CyclingProgram>;
  /** @deprecated use cyclingProgramsByEngine() */
  cyclingPrograms: Array<CyclingProgram>;
  /** @deprecated use cyclingProgramsByEngine() */
  cyclingProgramsByIsActive: Array<CyclingProgram>;
  /** Returns the CyclingProgram with the given id */
  cyclingProgramById: CyclingProgram;
  /** Returns a possibly filtered, sorted, and paginated list of CyclingPrograms */
  cyclingProgramsByEngine: CyclingProgramQueryEngineResult;
  /** Returns the CyclingProgram query engine's referenceable properties */
  cyclingProgramsProperties: Array<Scalars['String']>;
  /** @deprecated use departmentsByEngine() */
  departments: Array<Department>;
  /** @deprecated use departmentById() */
  department?: Maybe<Department>;
  /** @deprecated use departmentsByEngine() */
  departmentsByIsActive: Array<Department>;
  /** Returns the Department with the given id */
  departmentById?: Maybe<Department>;
  /** Returns a possibly filtered, sorted, and paginated list of Departments */
  departmentsByEngine: DepartmentQueryEngineResult;
  /** Returns the Department query engine's referenceable properties */
  departmentsProperties: Array<Scalars['String']>;
  /** @deprecated use sitesByEngine() */
  sites: Array<Site>;
  /** @deprecated use siteById() */
  site?: Maybe<Site>;
  /** @deprecated use sitesByEngine() */
  sitesByIsActive: Array<Site>;
  /** Returns the Site with the given id */
  siteById: Site;
  /** Returns a possibly filtered, sorted, and paginated list of Sites */
  sitesByEngine: SiteQueryEngineResult;
  /** Returns the Site query engine's referenceable properties */
  sitesProperties: Array<Scalars['String']>;
  /** @deprecated use vendorsByEngine() */
  vendors: Array<Vendor>;
  /** @deprecated use vendorById() */
  vendor?: Maybe<Vendor>;
  /** @deprecated use vendorsByEngine() */
  vendorsForPlateTypes: Array<Vendor>;
  /** @deprecated use vendorsByEngine() */
  vendorsForPartCategory: Array<Vendor>;
  /** @deprecated use vendorsByEngine() */
  vendorsByIsActive: Array<Vendor>;
  /** Returns the Vendor with the given id */
  vendorById: Vendor;
  /** Returns a possibly filtered, sorted, and paginated list of Vendors */
  vendorsByEngine: VendorQueryEngineResult;
  /** Returns the Vendor query engine's referenceable properties */
  vendorsProperties: Array<Scalars['String']>;
  /** @deprecated use partCategoriesByEngine() */
  part_categories: Array<PartCategory>;
  /** @deprecated use partCategoriesByEngine() */
  partCategories: Array<PartCategory>;
  /** @deprecated use partCategoriesByEngine() */
  partCategoriesByIsActive: Array<PartCategory>;
  /** Returns the PartCategory with the given id */
  partCategoryById?: Maybe<PartCategory>;
  /** Returns a possibly filtered, sorted, and paginated list of PartCategory objects */
  partCategoriesByEngine: PartCategoryQueryEngineResult;
  /** Returns the PartCategory query engine's referenceable properties */
  partCategoriesProperties: Array<Scalars['String']>;
  /** @deprecated use partManufacturersByEngine() */
  part_manufacturers: Array<PartManufacturer>;
  /** Returns the specified PartManufacturer */
  partManufacturerById: PartManufacturer;
  /** Returns a possibly filtered, sorted, and paginated list of PartManufacturer */
  partManufacturersByEngine: PartManufacturerQueryEngineResult;
  /** Returns the PartManufacturer query engine's referenceable properties */
  partManufacturersProperties: Array<Scalars['String']>;
  /** @deprecated use frameTypesByEngine() */
  frame_types: Array<FrameType>;
  /** @deprecated use frameTypeById() */
  frame_type?: Maybe<FrameType>;
  /** @deprecated use frameTypesByEngine() */
  frameTypes: Array<FrameType>;
  /** @deprecated use frameTypesByEngine() */
  frameTypesByIsActive: Array<FrameType>;
  /** Returns the FrameType with the given id */
  frameTypeById: FrameType;
  /** Returns a possibly filtered, sorted, and paginated list of FrameTypes */
  frameTypesByEngine: FrameTypeQueryEngineResult;
  /** Returns the User query engine's referenceable properties */
  frameTypesProperties: Array<Scalars['String']>;
  /** @deprecated use feltTypesByEngine() */
  felt_types: Array<FeltType>;
  /** @deprecated use feltTypeById() */
  felt_type?: Maybe<FeltType>;
  /** @deprecated use feltTypesByEngine() */
  feltTypes: Array<FeltType>;
  /** @deprecated use feltTypesByEngine() */
  feltTypesByIsActive: Array<FeltType>;
  /** Returns the FeltType with the given id */
  feltTypeById: FeltType;
  /** Returns a possibly filtered, sorted, and paginated list of FeltTypes */
  feltTypesByEngine: FeltTypeQueryEngineResult;
  /** Returns the FeltType query engine's referenceable properties */
  feltTypesProperties: Array<Scalars['String']>;
  /** @deprecated use puckTypesByEngine() */
  puck_types: Array<PuckType>;
  /** @deprecated use puckTypeById() */
  puck_type?: Maybe<PuckType>;
  /** @deprecated use puckTypesByEngine() */
  puckTypes: Array<PuckType>;
  /** @deprecated use puckTypesByEngine() */
  puckTypesByIsActive: Array<PuckType>;
  /** Returns the PuckType with the given id */
  puckTypeById: PuckType;
  /** Returns a possibly filtered, sorted, and paginated list of PuckTypes */
  puckTypesByEngine: PuckTypeQueryEngineResult;
  /** Returns the PuckType query engine's referenceable properties */
  puckTypesProperties: Array<Scalars['String']>;
  batteryStatusByEngine: BatteryStatusQueryEngineResult;
  batteryStatusProperties: Array<Scalars['String']>;
  /** @deprecated use furnacesByEngine() */
  furnaces: Array<Furnace>;
  /** @deprecated use furnaceById() */
  furnace?: Maybe<Furnace>;
  /** @deprecated use furnacesByEngine() */
  furnacesByIsActive: Array<Furnace>;
  /** Returns the Furnace with the given id */
  furnaceById: Furnace;
  /** Returns a possibly filtered, sorted, and paginated list of Furnaces */
  furnacesByEngine: FurnaceQueryEngineResult;
  /** Returns the Furnace query engine's referenceable properties */
  furnacesProperties: Array<Scalars['String']>;
  /** @deprecated use cyclersByEngine() */
  cyclers: Array<Cycler>;
  /** @deprecated use cyclerById() */
  cycler?: Maybe<Cycler>;
  /** @deprecated use cyclersByEngine() */
  cyclersByIsActive: Array<Cycler>;
  /** Returns the Cycler with the given id */
  cyclerById: Cycler;
  /** Returns a possibly filtered, sorted, and paginated list of Cyclers */
  cyclersByEngine: CyclerQueryEngineResult;
  /** Returns the Cycler query engine's referenceable properties */
  cyclersProperties: Array<Scalars['String']>;
  /** @deprecated use cyclerChannelsByEngine() */
  cycler_channels: Array<CyclerChannel>;
  /** @deprecated use cyclerChannelById() */
  cycler_channel?: Maybe<CyclerChannel>;
  /** @deprecated use cyclerChannelsByEngine() */
  cyclerChannel?: Maybe<CyclerChannel>;
  /** @deprecated use cyclerChannelsByEngine() */
  cyclerChannelsByIsActive: Array<CyclerChannel>;
  /** Returns the CyclerChannel with the given id */
  cyclerChannelById?: Maybe<CyclerChannel>;
  /** Returns a possibly filtered, sorted, and paginated list of CyclerChannels */
  cyclerChannelsByEngine: CyclerChannelQueryEngineResult;
  uniqueCyclerChannelsByEngine: Array<Scalars['String']>;
  /** Returns the CyclerChannel query engine's referenceable properties */
  cyclerChannelsProperties: Array<Scalars['String']>;
  /** @deprecated use electrolyteIngredientsByEngine() */
  electrolyte_ingredients: Array<ElectrolyteIngredient>;
  /** @deprecated use electrolyteIngredientById() */
  electrolyte_ingredient?: Maybe<ElectrolyteIngredient>;
  /** @deprecated use electrolyteIngredientsByEngine() */
  electrolyteIngredientsByIsActive: Array<ElectrolyteIngredient>;
  /** Returns the ElectrolyteIngredient with the given id */
  electrolyteIngredientById: ElectrolyteIngredient;
  /** Returns a possibly filtered, sorted, and paginated list of ElectrolyteIngredients */
  electrolyteIngredientsByEngine: ElectrolyteIngredientQueryEngineResult;
  /** Returns the ElectrolyteIngredient query engine's referenceable properties */
  electrolyteIngredientsProperties: Array<Scalars['String']>;
  /** @deprecated use electrolyteRecipesByEngine() */
  electrolyte_recipes: Array<ElectrolyteRecipe>;
  /** @deprecated use electrolyteRecipeById() */
  electrolyte_recipe?: Maybe<ElectrolyteRecipe>;
  /** @deprecated use electrolyteRecipesByEngine() */
  electrolyteRecipesByIsActive: Array<ElectrolyteRecipe>;
  /** Returns the ElectrolyteRecipe with the given id */
  electrolyteRecipeById: ElectrolyteRecipe;
  /** Returns a possibly filtered, sorted, and paginated list of ElectrolyteRecipes */
  electrolyteRecipesByEngine: ElectrolyteRecipeQueryEngineResult;
  /** Returns the ElectrolyteRecipe query engine's referenceable properties */
  electrolyteRecipesProperties: Array<Scalars['String']>;
  /** @deprecated use adhesiveRecipesByEngine() */
  adhesive_recipes: Array<AdhesiveRecipe>;
  /** @deprecated use adhesiveRecipesByEngine() */
  adhesiveRecipes: Array<AdhesiveRecipe>;
  /** @deprecated use adhesiveRecipeById() */
  adhesiveRecipe?: Maybe<AdhesiveRecipe>;
  /** @deprecated use adhesiveRecipesByEngine() */
  adhesiveRecipe2?: Maybe<AdhesiveRecipe>;
  /** @deprecated use adhesiveRecipesByEngine() */
  adhesiveRecipesByIsActive: Array<AdhesiveRecipe>;
  /** Returns the AdhesiveRecipe with the given id */
  adhesiveRecipeById: AdhesiveRecipe;
  /** Returns a possibly filtered, sorted, and paginated lit of AdhesiveRecipe */
  adhesiveRecipesByEngine: AdhesiveRecipeQueryEngineResult;
  /** Returns the AdhesiveRecipe query engine's referenceable properties */
  adhesiveRecipesProperties: Array<Scalars['String']>;
  /** @deprecated use batteryBuildMatricesByEngine() */
  battery_build_matrices: Array<BatteryBuildMatrix>;
  /** @deprecated use batteryBuildMatrixById() */
  battery_build_matrix?: Maybe<BatteryBuildMatrix>;
  /** Returns the BatteryBuildMatrix with the given serial number */
  batteryBuildMatrixById: BatteryBuildMatrix;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryBuildMatrix */
  batteryBuildMatricesByEngine: BatteryBuildMatrixQueryEngineResult;
  /** Returns the BatteryBuildMatrix query engine's referenceable properties */
  batteryBuildMatricesProperties: Array<Scalars['String']>;
  furnaceProcess?: Maybe<FurnaceProcess>;
  /** @deprecated Field no longer supported */
  weld_processes: Array<WeldProcess>;
  /** @deprecated Use weldProcess() */
  weld_process?: Maybe<WeldProcess>;
  weldProcess?: Maybe<WeldProcess>;
  /** @deprecated Field no longer supported */
  wash_processes: Array<WashProcess>;
  /** @deprecated Use washProcess() */
  wash_process?: Maybe<WashProcess>;
  washProcess?: Maybe<WashProcess>;
  /** @deprecated Field no longer supported */
  electrode_assembly_processes: Array<ElectrodeAssemblyProcess>;
  /** @deprecated Use electrodeAssemblyProcess() */
  electrode_assembly_process?: Maybe<ElectrodeAssemblyProcess>;
  electrodeAssemblyProcess?: Maybe<ElectrodeAssemblyProcess>;
  /** @deprecated Field no longer supported */
  frame_assembly_processes: Array<FrameAssemblyProcess>;
  /** @deprecated Use frameAssemblyProcess() */
  frame_assembly_process?: Maybe<FrameAssemblyProcess>;
  frameAssemblyProcess?: Maybe<FrameAssemblyProcess>;
  /** @deprecated Field no longer supported */
  felt_modification_processes: Array<FeltModificationProcess>;
  /** @deprecated Use feltModificationProcess() */
  felt_modification_process?: Maybe<FeltModificationProcess>;
  feltModificationProcess?: Maybe<FeltModificationProcess>;
  /** @deprecated Field no longer supported */
  hardware_info_recording_processes: Array<HardwareInfoRecordingProcess>;
  /** @deprecated Use hardwareInfoRecordingProcess() */
  hardware_info_recording_process?: Maybe<HardwareInfoRecordingProcess>;
  hardwareInfoRecordingProcess?: Maybe<HardwareInfoRecordingProcess>;
  /** @deprecated Field no longer supported */
  press_processes: Array<PressProcess>;
  /** @deprecated use pressProcess() */
  press_process?: Maybe<PressProcess>;
  pressProcess?: Maybe<PressProcess>;
  /** @deprecated Field no longer supported */
  dry_battery_test_processes: Array<DryBatteryTestProcess>;
  /** @deprecated Use dryBatteryTestProcess() */
  dry_battery_test_process?: Maybe<DryBatteryTestProcess>;
  dryBatteryTestProcess?: Maybe<DryBatteryTestProcess>;
  /** @deprecated Field no longer supported */
  rework_processes: Array<ReworkProcess>;
  /** @deprecated Use reworkProcess() */
  rework_process: Array<ReworkProcess>;
  reworkProcess: Array<ReworkProcess>;
  /** @deprecated Field no longer supported */
  electrolyte_filling_processes: Array<ElectrolyteFillingProcess>;
  /** @deprecated Use electrolyteFillingProcess() */
  electrolyte_filling_process?: Maybe<ElectrolyteFillingProcess>;
  electrolyteFillingProcess?: Maybe<ElectrolyteFillingProcess>;
  /** @deprecated Field no longer supported */
  wet_battery_eis_test_processes: Array<WetBatteryEisTestProcess>;
  /** @deprecated Field no longer supported */
  wet_battery_eis_test_process?: Maybe<WetBatteryEisTestProcess>;
  wetBatteryTestProcess?: Maybe<WetBatteryEisTestProcess>;
  /** @deprecated Field no longer supported */
  autopsy_processes: Array<FailureAnalysisAutopsyProcess>;
  /** @deprecated Use autopsyProcess() */
  autopsy_process?: Maybe<FailureAnalysisAutopsyProcess>;
  autopsyProcess?: Maybe<FailureAnalysisAutopsyProcess>;
  /** @deprecated Field no longer supported */
  cycler_channel_assignment_histories: Array<CyclerChannelAssignmentHistory>;
  /** @deprecated Field no longer supported */
  cyclerChannelAssignmentHistory?: Maybe<Array<CyclerChannelAssignmentHistory>>;
  /** @deprecated Use electrolyteFillingSpecs() */
  electrolyte_filling_specs: Array<ElectrolyteFillingSpec>;
  electrolyteFillingSpecs: Array<ElectrolyteFillingSpec>;
  /** @deprecated Use docIdMappings() */
  doc_id_mappings: Array<DocIdMapping>;
  docIdMappings: Array<DocIdMapping>;
  /** @deprecated Use changeAuditLogs() */
  change_audit_logs: Array<ChangeAuditLog>;
  changeAuditLogs: Array<ChangeAuditLog>;
  validateKeyValuePair?: Maybe<Scalars['Boolean']>;
  /** Returns a list of test processes for a battery, sorted by most-recently-used */
  labTestProcesses: Array<LabTestProcess>;
  /** @deprecated Use batteryPopulationsByEngine() */
  batteryPopulation: Array<BatteryPopulation>;
  /** Returns the BatteryPopulation with the given id */
  batteryPopulationById: BatteryPopulation;
  /** Returns a possibly filtered, sorted, and paginated list of BatteryPopulations */
  batteryPopulationsByEngine: BatteryPopulationQueryEngineResult;
  /** Returns the BatteryPopulation query engine's referenceable properties */
  batteryPopulationsProperties: Array<Scalars['String']>;
  rawFullDataById: RawFullData;
  rawFullDatasByEngine: RawFullDataQueryEngineResult;
  rawFullDatasProperties: Array<Scalars['String']>;
  oRingTypeById: ORingType;
  oRingTypesByEngine: ORingTypeQueryEngineResult;
  oRingTypesProperties: Array<Scalars['String']>;
  batteryTestAggregateById: BatteryTestAggregate;
  batteryTestAggregatesByEngine: BatteryTestAggregateQueryEngineResult;
  batteryTestAggregatesProperties: Array<Scalars['String']>;
  batteryViewByEngine?: Maybe<BatteryViewQueryEngineResult>;
  batteryBySerialNumber?: Maybe<BatteryView>;
  getAssetStatusCount?: Maybe<Array<Maybe<AssetStatusCount>>>;
  getAssetLifeCycleStageCount?: Maybe<Array<Maybe<AssetLifecycleStageCount>>>;
  getAllBatteriesCount: Scalars['Int'];
  getBatteryCountsByStatus: Scalars['Int'];
  getAssetStatuses: Array<EnumDetailsOutput>;
  getAssetStages: Array<EnumDetailsOutput>;
  getUseCases: Array<EnumDetailsOutput>;
  getCommentsByBatterySerialNumber?: Maybe<Array<Maybe<BatteryCommentsView>>>;
  getNotesByBatterySerialNumber?: Maybe<Array<Maybe<BatteryNotesView>>>;
  currentLotsInUse?: Maybe<Array<ManfacturingComponentLotOutput>>;
  getComponentLotCurrentlyInUseByType?: Maybe<ManfacturingComponentLotOutput>;
  /** @deprecated use getComponentLotCurrentlyInUseByType to get response object */
  getCurrentLotInUseByComponentType?: Maybe<Scalars['String']>;
  lotTracebilityByEngine?: Maybe<LotTracebilityViewQueryEngineResult>;
  getComponentLotCount: Scalars['Int'];
  getAllComponentLotsCount: Array<ComponentLotCount>;
  getAssemblyLines: Array<AssemblyLinesOuput>;
  searchLotNumbersByComponentType?: Maybe<Array<Maybe<ManfacturingComponentLotOutput>>>;
  getAllWelderLines?: Maybe<Array<Maybe<WelderLines>>>;
  getAllWelderLinesByAssemblyLine?: Maybe<Array<Maybe<WelderLines>>>;
  validateBatterySerialNumber?: Maybe<ValidationResponse>;
  getAllMeasurementSpecs: Array<MeasurementSpecs>;
  /** @deprecated Use validationRangeByName */
  getMeasurementSpecByName?: Maybe<MeasurementSpecs>;
  getHeartbeat?: Maybe<HeartbeatOutput>;
  containerViewByEngine?: Maybe<ContainerViewQueryEngineResult>;
  getContainerCountsByStatus?: Maybe<Scalars['Int']>;
  getAllContainersCount?: Maybe<Scalars['Int']>;
  containerBySerialNumber?: Maybe<ContainerView>;
  plateTypeClass: Array<PlateTypeClass>;
  fabProcessAttrTypeByEngine: PlateFabProcessAttrTypeQueryEngineResult;
  fabProcessAttributeById: PlateFabProcessAttribute;
  fabProcessAttributeByEngine: PlateFabProcessAttributeQueryEngineResult;
  fabProcessAttributeProperties: Array<Scalars['String']>;
  compositeMaterialById: CompositeMaterial;
  compositeMaterialByEngine: CompositeMaterialQueryEngineResult;
  compositeMaterialProperties: Array<Scalars['String']>;
  materialForms: Array<MaterialForm>;
  validationRangesViewByEngine: ValidationRangesViewEngineResult;
  validationRangeById?: Maybe<ValidationRangesView>;
  validationRangeByName?: Maybe<ValidationRangesView>;
  getContainerAssetStatuses: Array<EnumDetailsOutput>;
  getContainerAssetStages: Array<EnumDetailsOutput>;
  getContainerUseCases: Array<EnumDetailsOutput>;
  getContainerLocations?: Maybe<Array<Maybe<EnumDetailsOutput>>>;
  blockInstallationsByEngine: BlockInstViewQueryEngineResult;
  blockInstallationProperties: Array<Scalars['String']>;
  blockInstallation?: Maybe<BlockInstView>;
  stringInstallationsByEngine: StringInstViewQueryEngineResult;
  stringInstallationProperties: Array<Scalars['String']>;
  stringInstallation?: Maybe<StringInstView>;
  blockAlertEventByEngine: BlockAlertEventQueryEngineResult;
  blockAlertEventProperties: Array<Scalars['String']>;
  blockAlertEvent?: Maybe<BlockAlertEvent>;
  stringAlertEventByEngine: StringAlertEventQueryEngineResult;
  stringAlertEventProperties: Array<Scalars['String']>;
  stringAlertEvent?: Maybe<StringAlertEvent>;
  batteryAlertEventByEngine: BatteryAlertEventQueryEngineResult;
  batteryAlertEventProperties: Array<Scalars['String']>;
  batteryAlertEvent?: Maybe<BatteryAlertEvent>;
  subgroupInstallationsByEngine: SubgroupInstQueryEngineResult;
  subgroupInstallationProperties: Array<Scalars['String']>;
  subgroupInstallation?: Maybe<SubgroupInst>;
  siteInstallationsByEngine: SiteInstQueryEngineResult;
  siteInstallationProperties: Array<Scalars['String']>;
  siteInstallation?: Maybe<SiteInst>;
  batteryInstallationsByEngine: BatteryInstQueryEngineResult;
  batteryInstallationProperties: Array<Scalars['String']>;
  batteryInstallation?: Maybe<BatteryInst>;
  batteryLocationSnapshot: Array<Maybe<BatteryLocationHistory>>;
  batteryLocationHistoryByEngine: BatteryLocationHistoryQueryEngineResult;
  batteryLocationHistoryProperties: Array<Scalars['String']>;
  siteInstallationCycleStatsByEngine: SiteInstCycleStatsQueryEngineResult;
  siteInstallationCycleStatsProperties: Array<Scalars['String']>;
  subgroupInstallationCycleStatsByEngine: SubgroupInstCycleStatsQueryEngineResult;
  subgroupInstallationCycleStatsProperties: Array<Scalars['String']>;
  blockInstallationCycleStatsByEngine: BlockInstCycleStatsQueryEngineResult;
  blockInstallationCycleStatsProperties: Array<Scalars['String']>;
  stringInstallationCycleStatsByEngine: StringInstCycleStatsQueryEngineResult;
  stringInstallationCycleStatsProperties: Array<Scalars['String']>;
  blockAlertAggregateByEngine: BlockAlertAggregateQueryEngineResult;
  blockAlertAggregateProperties: Array<Scalars['String']>;
  blockAlertAggregateBySeverityByEngine: BlockAlertAggregateBySeverityQueryEngineResult;
  blockAlertAggregateBySeverityProperties: Array<Scalars['String']>;
  blockAlertAggregateBySubgroupByEngine: BlockAlertAggregateBySubgroupQueryEngineResult;
  blockAlertAggregateBySubgroupProperties: Array<Scalars['String']>;
  blockAlertAggregateByBlockByEngine: BlockAlertAggregateByBlockQueryEngineResult;
  blockAlertAggregateByBlockProperties: Array<Scalars['String']>;
  stringAlertAggregateByEngine: StringAlertAggregateQueryEngineResult;
  stringAlertAggregateProperties: Array<Scalars['String']>;
  stringAlertAggregateBySeverityByEngine: StringAlertAggregateBySeverityQueryEngineResult;
  stringAlertAggregateBySeverityProperties: Array<Scalars['String']>;
  stringAlertAggregateBySubgroupByEngine: StringAlertAggregateBySubgroupQueryEngineResult;
  stringAlertAggregateBySubgroupProperties: Array<Scalars['String']>;
  stringAlertAggregateByStringByEngine: StringAlertAggregateByStringQueryEngineResult;
  stringAlertAggregateByStringProperties: Array<Scalars['String']>;
  stringAlertAggregateByBlockByEngine: StringAlertAggregateByBlockQueryEngineResult;
  stringAlertAggregateByBlockProperties: Array<Scalars['String']>;
  stringAlertAggregateBySiteByEngine: StringAlertAggregateBySiteQueryEngineResult;
  stringAlertAggregateBySiteProperties: Array<Scalars['String']>;
  batteryAlertAggregateByEngine: BatteryAlertAggregateQueryEngineResult;
  batteryAlertAggregateProperties: Array<Scalars['String']>;
  batteryAlertAggregateBySeverityByEngine: BatteryAlertAggregateBySeverityQueryEngineResult;
  batteryAlertAggregateBySeverityProperties: Array<Scalars['String']>;
  batteryAlertAggregateBySubgroupByEngine: BatteryAlertAggregateBySubgroupQueryEngineResult;
  batteryAlertAggregateBySubgroupProperties: Array<Scalars['String']>;
  batteryAlertAggregateByBatteryByEngine: BatteryAlertAggregateByBatteryQueryEngineResult;
  batteryAlertAggregateByBatteryProperties: Array<Scalars['String']>;
  batteryAlertAggregateByStringByEngine: BatteryAlertAggregateByStringQueryEngineResult;
  batteryAlertAggregateByStringProperties: Array<Scalars['String']>;
  batteryAlertAggregateByBlockByEngine: BatteryAlertAggregateByBlockQueryEngineResult;
  batteryAlertAggregateByBlockProperties: Array<Scalars['String']>;
  batteryAlertAggregateBySiteByEngine: BatteryAlertAggregateBySiteQueryEngineResult;
  batteryAlertAggregateBySiteProperties: Array<Scalars['String']>;
  /** returns all distinct eventValue rows in database */
  alertEventValues: Array<Maybe<Scalars['String']>>;
  stringAlertEventValues: Array<Maybe<Scalars['String']>>;
  battery?: Maybe<Battery>;
  batteries?: Maybe<Array<Battery>>;
  batteryProperties: Array<Scalars['String']>;
  globalInst: GlobalInst;
  globalInstCycleStats: GlobalInstCycleStats;
};


export type QueryUsersWithEmailLikeArgs = {
  emailLike: Scalars['String'];
};


export type QueryUsersByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUsersByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryUsersByEngineWithPermissionsArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
  permissions: Array<Scalars['String']>;
};


export type QueryValidateOrderingArgs = {
  ordering: Ordering;
};


export type QueryMfgBatteryCollectionsArgs = {
  scope: CollectionsScope;
};


export type QueryMfgBatteryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCountMfgBatteryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  scope: CollectionsScope;
};


export type QueryBatteryTestCollectionsArgs = {
  scope: CollectionsScope;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryTestCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryCountByCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCountBatteryTestCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryTestMetadatasByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByExperimentsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByCellTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByFeltTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByPopulationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByCyclingProgramsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByElectrolyteRecipesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestsByExperimentAndPopulationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryLatestBatteryTestCycleArgs = {
  serialNumber: Scalars['String'];
};


export type QueryAverageOfLatestFiveBatteryTestCyclesArgs = {
  serialNumber: Scalars['String'];
};


export type QueryBatteryTestCycleByIdArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryTestCyclesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryExperimentsByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryExperimentArgs = {
  id: Scalars['ID'];
};


export type QueryExperimentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryExperimentsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCell_TypeArgs = {
  name: Scalars['String'];
};


export type QueryCellTypesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryCellTypesByIsActiveArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
};


export type QueryCellTypes2Args = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCellTypeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCellTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBattery_DesignArgs = {
  name: Scalars['String'];
};


export type QueryBatteryDesignsArgs = {
  nameLike?: Maybe<Scalars['String']>;
  revisionLike?: Maybe<Scalars['String']>;
};


export type QueryBatteryDesignByIdArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryDesignsByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryFrameAssemblySpecArgs = {
  frameTypeName: Scalars['String'];
  vendorName?: Maybe<Scalars['String']>;
};


export type QueryAdhesiveSpecsArgs = {
  nameLike?: Maybe<Scalars['String']>;
  revisionLike?: Maybe<Scalars['String']>;
};


export type QueryFeltSpecsArgs = {
  nameLike?: Maybe<Scalars['String']>;
  revisionLike?: Maybe<Scalars['String']>;
};


export type QueryPlate_TypeArgs = {
  name: Scalars['String'];
};


export type QueryPlateTypesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryPlateTypesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryPlateTypeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPlateTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCycling_ProgramArgs = {
  name: Scalars['String'];
};


export type QueryCyclingProgramsArgs = {
  nameLike?: Maybe<Scalars['String']>;
  revisionLike?: Maybe<Scalars['String']>;
};


export type QueryCyclingProgramsByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryCyclingProgramByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCyclingProgramsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryDepartmentsArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryDepartmentArgs = {
  name: Scalars['String'];
};


export type QueryDepartmentsByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryDepartmentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryDepartmentsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QuerySitesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QuerySiteArgs = {
  name: Scalars['String'];
};


export type QuerySitesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QuerySiteByIdArgs = {
  id: Scalars['ID'];
};


export type QuerySitesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryVendorsArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryVendorArgs = {
  name: Scalars['String'];
};


export type QueryVendorsForPartCategoryArgs = {
  partCategoryId: Scalars['ID'];
};


export type QueryVendorsByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryVendorByIdArgs = {
  id: Scalars['ID'];
};


export type QueryVendorsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryPartCategoriesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryPartCategoriesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryPartCategoryByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPartCategoriesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryPartManufacturerByIdArgs = {
  partCategoryId: Scalars['ID'];
  vendorId: Scalars['ID'];
};


export type QueryPartManufacturersByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryFrame_TypeArgs = {
  name: Scalars['String'];
};


export type QueryFrameTypesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryFrameTypesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryFrameTypeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFrameTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryFelt_TypeArgs = {
  name: Scalars['String'];
};


export type QueryFeltTypesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryFeltTypesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryFeltTypeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFeltTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryPuck_TypeArgs = {
  design_id: Scalars['String'];
};


export type QueryPuckTypesArgs = {
  designId?: Maybe<Scalars['String']>;
};


export type QueryPuckTypesByIsActiveArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
};


export type QueryPuckTypeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPuckTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryStatusByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryFurnacesArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryFurnaceArgs = {
  name: Scalars['String'];
};


export type QueryFurnacesByIsActiveArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
};


export type QueryFurnaceByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFurnacesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCyclersArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryCyclerArgs = {
  name: Scalars['String'];
};


export type QueryCyclersByIsActiveArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
};


export type QueryCyclerByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCyclersByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCycler_ChannelsArgs = {
  channelLike?: Maybe<Scalars['String']>;
};


export type QueryCycler_ChannelArgs = {
  channel: Scalars['String'];
};


export type QueryCyclerChannelArgs = {
  cyclerName: Scalars['String'];
  channelName: Scalars['String'];
};


export type QueryCyclerChannelsByIsActiveArgs = {
  isActive?: Maybe<Scalars['Boolean']>;
};


export type QueryCyclerChannelByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCyclerChannelsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryUniqueCyclerChannelsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryElectrolyte_IngredientsArgs = {
  nameLike?: Maybe<Scalars['String']>;
};


export type QueryElectrolyte_IngredientArgs = {
  name: Scalars['String'];
};


export type QueryElectrolyteIngredientsByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryElectrolyteIngredientByIdArgs = {
  id: Scalars['ID'];
};


export type QueryElectrolyteIngredientsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryElectrolyte_RecipesArgs = {
  nameLike?: Maybe<Scalars['String']>;
  revisionLike?: Maybe<Scalars['String']>;
};


export type QueryElectrolyte_RecipeArgs = {
  name: Scalars['String'];
};


export type QueryElectrolyteRecipesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryElectrolyteRecipeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryElectrolyteRecipesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryAdhesiveRecipesArgs = {
  nameLike?: Maybe<Scalars['String']>;
  revisionLike?: Maybe<Scalars['String']>;
};


export type QueryAdhesiveRecipeArgs = {
  id: Scalars['ID'];
};


export type QueryAdhesiveRecipe2Args = {
  name: Scalars['String'];
  revision: Scalars['String'];
};


export type QueryAdhesiveRecipesByIsActiveArgs = {
  isActive: Scalars['Boolean'];
};


export type QueryAdhesiveRecipeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAdhesiveRecipesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBattery_Build_MatricesArgs = {
  serialNumberLike?: Maybe<Scalars['String']>;
};


export type QueryBattery_Build_MatrixArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryBatteryBuildMatrixByIdArgs = {
  id: Scalars['String'];
};


export type QueryBatteryBuildMatricesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryFurnaceProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryWeld_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryWeldProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryWash_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryWashProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryElectrode_Assembly_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryElectrodeAssemblyProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryFrame_Assembly_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryFrameAssemblyProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryFelt_Modification_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryFeltModificationProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryHardware_Info_Recording_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryHardwareInfoRecordingProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryPress_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryPressProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryDry_Battery_Test_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryDryBatteryTestProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryRework_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryReworkProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryElectrolyte_Filling_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryElectrolyteFillingProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryWet_Battery_Eis_Test_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryWetBatteryTestProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryAutopsy_ProcessArgs = {
  battery_serial_number: Scalars['String'];
};


export type QueryAutopsyProcessArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryCyclerChannelAssignmentHistoryArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryValidateKeyValuePairArgs = {
  keyValuePair: KeyValuePairUpdate;
};


export type QueryLabTestProcessesArgs = {
  batterySerialNumber: Scalars['String'];
};


export type QueryBatteryPopulationArgs = {
  experimentId: Scalars['ID'];
  name: Scalars['String'];
};


export type QueryBatteryPopulationByIdArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryPopulationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryRawFullDataByIdArgs = {
  id: Scalars['ID'];
};


export type QueryRawFullDatasByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryORingTypeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryORingTypesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryTestAggregateByIdArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryTestAggregatesByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryViewByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryBySerialNumberArgs = {
  serialNumber?: Maybe<Scalars['String']>;
};


export type QueryGetBatteryCountsByStatusArgs = {
  status: AssetStatus;
};


export type QueryGetCommentsByBatterySerialNumberArgs = {
  serialNumber?: Maybe<Scalars['String']>;
};


export type QueryGetNotesByBatterySerialNumberArgs = {
  serialNumber?: Maybe<Scalars['String']>;
};


export type QueryCurrentLotsInUseArgs = {
  assemblyId: Scalars['Int'];
};


export type QueryGetComponentLotCurrentlyInUseByTypeArgs = {
  componentType: ComponentType;
  assemblyLine?: Maybe<Scalars['Int']>;
};


export type QueryGetCurrentLotInUseByComponentTypeArgs = {
  componentType: ComponentType;
  assemblyLine?: Maybe<Scalars['Int']>;
};


export type QueryLotTracebilityByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryGetComponentLotCountArgs = {
  lotType: ComponentType;
};


export type QuerySearchLotNumbersByComponentTypeArgs = {
  componentType?: Maybe<ComponentType>;
  search?: Maybe<Scalars['String']>;
};


export type QueryGetAllWelderLinesByAssemblyLineArgs = {
  assemblyLine: Scalars['Int'];
};


export type QueryValidateBatterySerialNumberArgs = {
  batterySerialNumber: Scalars['String'];
  welderLine: Scalars['ID'];
};


export type QueryGetMeasurementSpecByNameArgs = {
  measurementType?: Maybe<MeasurementSpecsType>;
};


export type QueryContainerViewByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryGetContainerCountsByStatusArgs = {
  status: AssetStatus;
};


export type QueryContainerBySerialNumberArgs = {
  serialNumber: Scalars['String'];
};


export type QueryFabProcessAttrTypeByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryFabProcessAttributeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFabProcessAttributeByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCompositeMaterialByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCompositeMaterialByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryValidationRangesViewByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryValidationRangeByIdArgs = {
  id: Scalars['ID'];
};


export type QueryValidationRangeByNameArgs = {
  measurementSpecsType: MeasurementSpecsType;
};


export type QueryBlockInstallationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockInstallationArgs = {
  id: Scalars['ID'];
};


export type QueryStringInstallationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringInstallationArgs = {
  id: Scalars['ID'];
};


export type QueryBlockAlertEventByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockAlertEventArgs = {
  id: Scalars['ID'];
};


export type QueryStringAlertEventByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertEventArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryAlertEventByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertEventArgs = {
  id: Scalars['ID'];
};


export type QuerySubgroupInstallationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QuerySubgroupInstallationArgs = {
  id: Scalars['ID'];
};


export type QuerySiteInstallationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QuerySiteInstallationArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryInstallationsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryInstallationArgs = {
  id: Scalars['ID'];
};


export type QueryBatteryLocationSnapshotArgs = {
  stringId: Scalars['ID'];
  snapshotAt: Scalars['Timestamp'];
};


export type QueryBatteryLocationHistoryByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QuerySiteInstallationCycleStatsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QuerySubgroupInstallationCycleStatsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockInstallationCycleStatsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringInstallationCycleStatsByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockAlertAggregateByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockAlertAggregateBySeverityByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockAlertAggregateBySubgroupByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBlockAlertAggregateByBlockByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertAggregateByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertAggregateBySeverityByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertAggregateBySubgroupByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertAggregateByStringByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertAggregateByBlockByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStringAlertAggregateBySiteByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateBySeverityByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateBySubgroupByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateByBatteryByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateByStringByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateByBlockByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryAlertAggregateBySiteByEngineArgs = {
  predicate?: Maybe<PredicateInput>;
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryBatteryArgs = {
  id: Scalars['ID'];
};

export type QueryEngineResult = {
  /** The number of objects that were returned by the query */
  resultCount: Scalars['Int'];
  /** The number of objects that match the submitted predicate */
  totalCount: Scalars['Int'];
};

export type QueryOptions = {
  constraintGroup?: Maybe<ConstraintGroup>;
  grouping?: Maybe<Array<Scalars['String']>>;
  ordering?: Maybe<Array<Ordering>>;
  pagination?: Maybe<PaginationInput>;
};

export type RawFullData = {
  __typename?: 'RawFullData';
  serialNumber: Scalars['ID'];
  all?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  experimentId: Scalars['ID'];
  experimentPurpose?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  frameType?: Maybe<Scalars['String']>;
  cellType?: Maybe<Scalars['String']>;
  adhesiveSpec?: Maybe<Scalars['String']>;
  cathodeRecipe?: Maybe<Scalars['String']>;
  terminalCathodeCc?: Maybe<Scalars['String']>;
  bipolarCathodeCc?: Maybe<Scalars['String']>;
  anodeCc?: Maybe<Scalars['String']>;
  electrolyteRecipe?: Maybe<Scalars['String']>;
  perforatedComponent?: Maybe<Scalars['String']>;
  chargeCapacityAh?: Maybe<Scalars['String']>;
  chargeCapacityMahcm2?: Maybe<Scalars['String']>;
  chargeRateW?: Maybe<Scalars['String']>;
  chargeCurrentMacm2?: Maybe<Scalars['String']>;
  chargeVoltageCutoffV?: Maybe<Scalars['String']>;
  chargePotentialV?: Maybe<Scalars['String']>;
  dischargeRateW?: Maybe<Scalars['String']>;
  dischargeCurrentMacm2?: Maybe<Scalars['String']>;
  dischargeVoltageCutoffV?: Maybe<Scalars['String']>;
  dischargeVoltageV?: Maybe<Scalars['String']>;
  dischargeCvCutoffMacm2?: Maybe<Scalars['String']>;
  topOfChargeRestTime?: Maybe<Scalars['String']>;
  topOfChargeRestTimeMinutes?: Maybe<Scalars['String']>;
  bottomOfDischargeRestTime?: Maybe<Scalars['String']>;
  bottomOfDischargeRestTimeMinutes?: Maybe<Scalars['String']>;
  stepDownRateW?: Maybe<Scalars['String']>;
  stepDownCutoffV?: Maybe<Scalars['String']>;
  testTemperatureC?: Maybe<Scalars['String']>;
  cycleParameters?: Maybe<Scalars['String']>;
  cyclerLocation?: Maybe<Scalars['String']>;
  experimentalGroup?: Maybe<Scalars['String']>;
  externalGroup?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
};

export type RawFullDataQueryEngineResult = QueryEngineResult & {
  __typename?: 'RawFullDataQueryEngineResult';
  results: Array<RawFullData>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type RemoveAsQuarantineInput = {
  batterySerialNumber: Scalars['String'];
  formationCompleted?: Maybe<Scalars['Boolean']>;
  voltageDelta?: Maybe<Scalars['Float']>;
  currentDelta?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Scalars['Float']>;
  mechanicalDefect?: Maybe<Scalars['String']>;
  electricalDefect?: Maybe<Scalars['String']>;
  damage?: Maybe<Scalars['String']>;
  cycleBeforeFailure?: Maybe<Scalars['Timestamp']>;
  cycleType?: Maybe<Scalars['String']>;
  leakageLength?: Maybe<Scalars['Float']>;
  leakageHeight?: Maybe<Scalars['Float']>;
  leakageWidth?: Maybe<Scalars['Float']>;
  leakageAmount?: Maybe<Scalars['Float']>;
};

export type ReworkProcess = {
  __typename?: 'ReworkProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /** @deprecated Use camel-case variant */
  failure_reason?: Maybe<Scalars['String']>;
  failureReason?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  failure_at?: Maybe<Scalars['Timestamp']>;
  failureAt?: Maybe<Scalars['Timestamp']>;
  reporterId?: Maybe<Scalars['ID']>;
  reporter?: Maybe<User>;
  /** @deprecated Use camel-case variant */
  rework_solution_details?: Maybe<Scalars['String']>;
  reworkSolutionDetails?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Use camel-case variant */
  reworked_at?: Maybe<Scalars['Timestamp']>;
  reworkedAt?: Maybe<Scalars['Timestamp']>;
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  /** @deprecated Use camel-case variant */
  new_qc_specs?: Maybe<Scalars['String']>;
  newQcSpecs?: Maybe<Scalars['String']>;
  /** @deprecated Use camel-case variant */
  dry_battery_test?: Maybe<DryBatteryTestProcess>;
  dryBatteryTest?: Maybe<DryBatteryTestProcess>;
  notes?: Maybe<Scalars['String']>;
};

export type ReworkProcessUpdate = {
  battery_serial_number: Scalars['String'];
  failure_reason?: Maybe<Scalars['String']>;
  failure_at?: Maybe<Scalars['Timestamp']>;
  reporter_id?: Maybe<Scalars['ID']>;
  rework_solution_details?: Maybe<Scalars['String']>;
  reworked_at?: Maybe<Scalars['Timestamp']>;
  new_qc_specs?: Maybe<Scalars['String']>;
  /** battery_serial_number of this object is ignored */
  dry_battery_test?: Maybe<DryBatteryTestProcessUpdate>;
  notes?: Maybe<Scalars['String']>;
  operator_id?: Maybe<Scalars['ID']>;
};

/** A location at which a user works */
export type Site = {
  __typename?: 'Site';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The site's name */
  name?: Maybe<Scalars['String']>;
  /** The site's location */
  address?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
};

export type SiteInst = {
  __typename?: 'SiteInst';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  isActive: Scalars['Boolean'];
  energyRating?: Maybe<Scalars['Float']>;
  powerRating?: Maybe<Scalars['Float']>;
  cycle24HourStartTime?: Maybe<Scalars['String']>;
  offsetFromUtc?: Maybe<Scalars['String']>;
  latestInstantaneousPower?: Maybe<Scalars['Float']>;
  latestStateOfCharge?: Maybe<Scalars['Float']>;
  latestSysStateOfCharge?: Maybe<Scalars['Float']>;
  timeSeriesDurationH?: Maybe<Scalars['Int']>;
  decimationTimeSeriesDurationH?: Maybe<Scalars['Int']>;
  timeSeriesReplication?: Maybe<Scalars['Int']>;
  decimationTimeSeriesReplication?: Maybe<Scalars['Int']>;
  samplesPerDay?: Maybe<Scalars['Int']>;
  decimationSamplesPerDay?: Maybe<Scalars['Int']>;
  stringPowerLimitCharge?: Maybe<Scalars['Float']>;
  stringPowerLimitDischarge?: Maybe<Scalars['Float']>;
  aggregatedBlockTimeSeries?: Maybe<AggregatedBlockDataset>;
  aggregatedBlockMetadataTimeSeries?: Maybe<AggregatedBlockMetadataDataset>;
  subgroups: SubgroupInstQueryEngineResult;
  alertCount: AlertCountResponse;
  alertTimeSeries: AlertDataset;
  /** number of subgroup installations in site */
  subgroupCount?: Maybe<Scalars['Int']>;
  /** number of stack installations in site */
  stackCount?: Maybe<Scalars['Int']>;
  /** number of block installations in site */
  blockCount?: Maybe<Scalars['Int']>;
  /** number of string installations in site */
  stringCount?: Maybe<Scalars['Int']>;
  /** number of battery installations in site */
  batteryCount?: Maybe<Scalars['Int']>;
  latestSysStatelessChargeEnergyLifetime?: Maybe<Scalars['Float']>;
  latestSysStatelessDischargeEnergyLifetime?: Maybe<Scalars['Float']>;
  timeZone?: Maybe<Scalars['String']>;
  forecastWeather?: Maybe<Array<Maybe<SiteWeatherData>>>;
  spotPower?: Maybe<Scalars['Float']>;
  spotCurrent?: Maybe<Scalars['Float']>;
  spotVoltage?: Maybe<Scalars['Float']>;
  spotEnergy?: Maybe<Scalars['Float']>;
  spotSysTemp?: Maybe<Scalars['Float']>;
  chargeStatus?: Maybe<Scalars['String']>;
  ratedCurrent?: Maybe<Scalars['Float']>;
  ratedVoltage?: Maybe<Scalars['Float']>;
  ambientTemperature?: Maybe<AmbientTemperature>;
};


export type SiteInstAggregatedBlockTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type SiteInstAggregatedBlockMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type SiteInstSubgroupsArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type SiteInstAlertTimeSeriesArgs = {
  filtering?: Maybe<FilterInput>;
};

export type SiteInstCycleStats = {
  __typename?: 'SiteInstCycleStats';
  id: Scalars['ID'];
  siteId: Scalars['ID'];
  cycleStartedAt?: Maybe<Scalars['Timestamp']>;
  cycleEndedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleStartedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleEndedAt?: Maybe<Scalars['Timestamp']>;
  cycle?: Maybe<Scalars['Int']>;
  systemChargeTimeMax?: Maybe<Scalars['Int']>;
  systemPrimaryDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemSecondaryDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemTotalDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemChargeEnergySum?: Maybe<Scalars['Float']>;
  systemPrimaryDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemSecondaryDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemTotalDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyLifetime?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyLifetime?: Maybe<Scalars['Float']>;
  systemAvChargePowerSum?: Maybe<Scalars['Float']>;
  systemAvPrimaryDischargePowerSum?: Maybe<Scalars['Float']>;
  systemAvSecondaryDischargePowerSum?: Maybe<Scalars['Float']>;
  systemAvTotalDischargePowerSum?: Maybe<Scalars['Float']>;
  site: SiteInst;
  systemTotalEfficiencyMax?: Maybe<Scalars['Float']>;
  systemTotalEfficiencyMin?: Maybe<Scalars['Float']>;
  systemTotalEfficiencyAvg?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiencyMax?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiencyMin?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiencyAvg?: Maybe<Scalars['Float']>;
  minTempMin?: Maybe<Scalars['Float']>;
  avgTempAvg?: Maybe<Scalars['Float']>;
  maxTempMax?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergySum?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemStatelessChargeTimeMax?: Maybe<Scalars['Int']>;
  systemStatelessDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemStatelessChargeEnergyMin?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyMax?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyAvg?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyMin?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyMax?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyAvg?: Maybe<Scalars['Float']>;
  systemStatelessChargeTimeMin?: Maybe<Scalars['Int']>;
  systemStatelessChargeTimeAvg?: Maybe<Scalars['Float']>;
  systemStatelessDischargeTimeMin?: Maybe<Scalars['Int']>;
  systemStatelessDischargeTimeAvg?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerMin?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerMax?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerAvg?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerSum?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerMin?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerMax?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerAvg?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerSum?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacityMin?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacityMax?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacityAvg?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacitySum?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacityMin?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacityMax?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacityAvg?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacitySum?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiencyMin?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiencyMax?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiencyAvg?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiency?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyAvgPerString?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyAvgPerString?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiency?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiencyMin?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiencyAvg?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiencyMax?: Maybe<Scalars['Float']>;
  avgSiteAmbientTemp?: Maybe<Scalars['Float']>;
  maxSiteAmbientTemp?: Maybe<Scalars['Float']>;
  minSiteAmbientTemp?: Maybe<Scalars['Float']>;
};

export type SiteInstCycleStatsQueryEngineResult = {
  __typename?: 'SiteInstCycleStatsQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<SiteInstCycleStats>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  csvDownloadPath?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  zoneId?: Maybe<Scalars['String']>;
};

export type SiteInstInput = {
  eosSiteId: Scalars['String'];
  name: Scalars['String'];
  /**
   * description : String
   * companyName : String
   * address : String
   * city : String
   * state : String
   * country : String
   * zipcode : String
   */
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  powerRating?: Maybe<Scalars['Float']>;
  energyRating?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  /**
   * timeSeriesDurationH : Int
   * decimationTimeSeriesDurationH : Int
   * timeSeriesReplication : Int
   * decimationTimeSeriesReplication : Int
   * samplesPerDay : Int
   * decimationSamplesPerDay : Int
   */
  cycle24hoursStartTime?: Maybe<Scalars['String']>;
  stringPowerLimitCharge?: Maybe<Scalars['Float']>;
  stringPowerLimitDischarge?: Maybe<Scalars['Float']>;
  offsetFromUtc?: Maybe<Scalars['String']>;
};

/** The typed result of invoking the SiteInst query engine */
export type SiteInstQueryEngineResult = QueryEngineResult & {
  __typename?: 'SiteInstQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<SiteInst>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of invoking the Site query engine */
export type SiteQueryEngineResult = QueryEngineResult & {
  __typename?: 'SiteQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<Site>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type SiteUpdate = {
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type SiteWeatherData = {
  __typename?: 'SiteWeatherData';
  day?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Timestamp']>;
  temperature?: Maybe<Scalars['String']>;
  minTemperature?: Maybe<Scalars['String']>;
  maxTemperature?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** CONTAINER - Stack Battery */
export enum Stack {
  StackA = 'STACK_A',
  StackB = 'STACK_B',
  StackAQc = 'STACK_A_QC',
  StackBQc = 'STACK_B_QC'
}

export type StackInst = {
  __typename?: 'StackInst';
  id: Scalars['ID'];
  blockId: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  block: BlockInst;
  positionInBlock?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  installationAddress: Scalars['String'];
};

export type StackInstInput = {
  serialNumber?: Maybe<Scalars['String']>;
  blockId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  positionInBlock?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type StackSignOffInput = {
  containerSerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
};

export type StackSignOffOutput = {
  __typename?: 'StackSignOffOutput';
  containerSerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
};

export type StationVersions = {
  __typename?: 'StationVersions';
  versionNum?: Maybe<Scalars['Int']>;
  versionName?: Maybe<Scalars['String']>;
};

export type StringAlertAggregate = {
  __typename?: 'StringAlertAggregate';
  id: Scalars['ID'];
  eosBlockId: Scalars['ID'];
  blockId: Scalars['ID'];
  eventAt: Scalars['Timestamp'];
  eventValue: Scalars['String'];
  eosSubgroupId: Scalars['String'];
  subgroupId: Scalars['ID'];
  severity: Scalars['String'];
  durationMs: Scalars['Int'];
  /** true = state went to high, false = state went to low */
  eventStateSet: Scalars['Boolean'];
};

export type StringAlertAggregateByBlock = {
  __typename?: 'StringAlertAggregateByBlock';
  eosBlockId: Scalars['ID'];
  blockId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type StringAlertAggregateByBlockQueryEngineResult = {
  __typename?: 'StringAlertAggregateByBlockQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertAggregateByBlock>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringAlertAggregateBySeverity = {
  __typename?: 'StringAlertAggregateBySeverity';
  severity: Scalars['String'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type StringAlertAggregateBySeverityQueryEngineResult = {
  __typename?: 'StringAlertAggregateBySeverityQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertAggregateBySeverity>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringAlertAggregateBySite = {
  __typename?: 'StringAlertAggregateBySite';
  eosSiteId: Scalars['ID'];
  siteId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

export type StringAlertAggregateBySiteQueryEngineResult = {
  __typename?: 'StringAlertAggregateBySiteQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertAggregateBySite>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringAlertAggregateByString = {
  __typename?: 'StringAlertAggregateByString';
  serialNumber: Scalars['ID'];
  stringId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type StringAlertAggregateByStringQueryEngineResult = {
  __typename?: 'StringAlertAggregateByStringQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertAggregateByString>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringAlertAggregateBySubgroup = {
  __typename?: 'StringAlertAggregateBySubgroup';
  eosSubgroupId: Scalars['String'];
  subgroupId: Scalars['ID'];
  count: Scalars['Int'];
  sumDuration?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type StringAlertAggregateBySubgroupQueryEngineResult = {
  __typename?: 'StringAlertAggregateBySubgroupQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertAggregateBySubgroup>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

/** The typed result of invoking the StringAlertEvent query engine */
export type StringAlertAggregateQueryEngineResult = {
  __typename?: 'StringAlertAggregateQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertAggregate>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringAlertDataset = Dataset & {
  __typename?: 'StringAlertDataset';
  data?: Maybe<StringAlertTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type StringAlertEvent = {
  __typename?: 'StringAlertEvent';
  id: Scalars['ID'];
  stringId: Scalars['ID'];
  string: StringInst;
  eventAt: Scalars['Timestamp'];
  eventValue: Scalars['String'];
  eventTypeId: Scalars['ID'];
  eventType: AlertEventType;
  /** true = state went to high, false = state went to low */
  eventStateSet: Scalars['Boolean'];
};

/** The typed result of invoking the BlockAlertEvent query engine */
export type StringAlertEventQueryEngineResult = {
  __typename?: 'StringAlertEventQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringAlertEvent>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  timeZone?: Maybe<Scalars['String']>;
};

export type StringAlertTimeSeries = Timeseries & {
  __typename?: 'StringAlertTimeSeries';
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  warnings: Array<Maybe<Scalars['Int']>>;
  faults: Array<Maybe<Scalars['Int']>>;
  alarms: Array<Maybe<Scalars['Int']>>;
  strings: Array<Maybe<StringInst>>;
};

export type StringDataset = Dataset & {
  __typename?: 'StringDataset';
  data?: Maybe<StringTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type StringInst = {
  __typename?: 'StringInst';
  id: Scalars['ID'];
  serialNumber?: Maybe<Scalars['String']>;
  stackId?: Maybe<Scalars['ID']>;
  stack?: Maybe<StackInst>;
  block?: Maybe<BlockInst>;
  positionInStack: Scalars['String'];
  positionInBlock: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  batteries: BatteryInstQueryEngineResult;
  batteryLocationHistory: BatteryLocationHistoryQueryEngineResult;
  batteryTimeSeries?: Maybe<Array<BatteryDataset>>;
  timeSeries: StringDataset;
  metadataTimeSeries: StringMetadataDataset;
  /** number of battery installations in string */
  batteryCount?: Maybe<Scalars['Int']>;
  /** via sql relations */
  installationAddress: Scalars['String'];
  /** latest cycleIndex from StringInstCycleStat */
  latestCycleIndex?: Maybe<Scalars['Int']>;
  alertCount: AlertCountResponse;
  alertTimeSeries: StringAlertDataset;
};


export type StringInstBatteriesArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type StringInstBatteryLocationHistoryArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type StringInstBatteryTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type StringInstTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type StringInstMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type StringInstInstallationAddressArgs = {
  format?: Maybe<AddressFormat>;
};


export type StringInstAlertTimeSeriesArgs = {
  filtering?: Maybe<FilterInput>;
};

export type StringInstCycleStats = {
  __typename?: 'StringInstCycleStats';
  id: Scalars['ID'];
  cycleEndedAt?: Maybe<Scalars['Timestamp']>;
  cycleStartedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleStartedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleEndedAt?: Maybe<Scalars['Timestamp']>;
  stringId: Scalars['ID'];
  avChargeVoltage?: Maybe<Scalars['Float']>;
  avDischargeVoltage?: Maybe<Scalars['Float']>;
  bodRestTime?: Maybe<Scalars['Float']>;
  chargeCapacityAll?: Maybe<Scalars['Float']>;
  chargeCapacityMain?: Maybe<Scalars['Float']>;
  chargeEnergyAll?: Maybe<Scalars['Float']>;
  chargeEnergyMain?: Maybe<Scalars['Float']>;
  chargePowerMain?: Maybe<Scalars['Float']>;
  chargePowerSecondary?: Maybe<Scalars['Float']>;
  chargeTimeAll?: Maybe<Scalars['Float']>;
  chargeTimeMain?: Maybe<Scalars['Float']>;
  coulombicEfficiencyAll?: Maybe<Scalars['Float']>;
  coulombicEfficiencyMain?: Maybe<Scalars['Float']>;
  dischargeCapacityAll?: Maybe<Scalars['Float']>;
  dischargeCapacityMain?: Maybe<Scalars['Float']>;
  dischargeEnergyAll?: Maybe<Scalars['Float']>;
  dischargeEnergyMain?: Maybe<Scalars['Float']>;
  dischargePowerMain?: Maybe<Scalars['Float']>;
  dischargePowerSecondary?: Maybe<Scalars['Float']>;
  dischargeTimeAll?: Maybe<Scalars['Float']>;
  dischargeTimeMain?: Maybe<Scalars['Float']>;
  energyEfficiencyAll?: Maybe<Scalars['Float']>;
  energyEfficiencyMain?: Maybe<Scalars['Float']>;
  tocRestTime?: Maybe<Scalars['Float']>;
  cycle?: Maybe<Scalars['Int']>;
  systemChargeCapacity?: Maybe<Scalars['Float']>;
  systemChargeTime?: Maybe<Scalars['Int']>;
  systemDischargeTime?: Maybe<Scalars['Int']>;
  systemDischargeCapacity?: Maybe<Scalars['Float']>;
  systemCoulombicEfficiency?: Maybe<Scalars['Float']>;
  systemTotalChargeEnergy?: Maybe<Scalars['Float']>;
  systemTotalDischargeEnergy?: Maybe<Scalars['Float']>;
  systemTotalEnergyEfficiency?: Maybe<Scalars['Float']>;
  systemPrimaryDischargeEnergy?: Maybe<Scalars['Float']>;
  dischargeTimeSecondary?: Maybe<Scalars['Int']>;
  systemStatelessChargeCapacity?: Maybe<Scalars['Float']>;
  systemStatelessChargeTime?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergy?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacity?: Maybe<Scalars['Float']>;
  systemStatelessDischargeTime?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergy?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiency?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiency?: Maybe<Scalars['Float']>;
  minTemp?: Maybe<Scalars['Float']>;
  maxTemp?: Maybe<Scalars['Float']>;
  avgTemp?: Maybe<Scalars['Float']>;
};

/** The typed result of invoking the SiteInst query engine */
export type StringInstCycleStatsQueryEngineResult = {
  __typename?: 'StringInstCycleStatsQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringInstCycleStats>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  csvDownloadPath?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  zoneId?: Maybe<Scalars['String']>;
};

export type StringInstInput = {
  serialNumber?: Maybe<Scalars['String']>;
  stackId?: Maybe<Scalars['Int']>;
  positionInStack?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  positionInBlock?: Maybe<Scalars['String']>;
  blockId?: Maybe<Scalars['Int']>;
};

/** The typed result of invoking the SiteInst query engine */
export type StringInstQueryEngineResult = QueryEngineResult & {
  __typename?: 'StringInstQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringInst>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringInstView = {
  __typename?: 'StringInstView';
  id: Scalars['ID'];
  serialNumber?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  stackId?: Maybe<Scalars['ID']>;
  stack?: Maybe<StackInst>;
  blockId?: Maybe<Scalars['ID']>;
  block?: Maybe<BlockInst>;
  positionInStack: Scalars['String'];
  positionInBlock: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  cycleStats?: Maybe<Array<StringInstCycleStats>>;
  latestCycleStats?: Maybe<StringInstCycleStats>;
  batteries: BatteryInstQueryEngineResult;
  batteryLocationHistory: BatteryLocationHistoryQueryEngineResult;
  batteryTimeSeries?: Maybe<Array<BatteryDataset>>;
  timeSeries: StringDataset;
  metadataTimeSeries: StringMetadataDataset;
  /** number of battery installations in string */
  batteryCount?: Maybe<Scalars['Int']>;
  /** via sql relations */
  installationAddress: Scalars['String'];
  /** latest cycleIndex from StringInstCycleStat */
  latestCycleIndex?: Maybe<Scalars['Int']>;
  alertCount: AlertCountResponse;
  alertTimeSeries: StringAlertDataset;
};


export type StringInstViewCycleStatsArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type StringInstViewBatteriesArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type StringInstViewBatteryLocationHistoryArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type StringInstViewBatteryTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type StringInstViewTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type StringInstViewMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type StringInstViewAlertTimeSeriesArgs = {
  filtering?: Maybe<FilterInput>;
};

/** The typed result of invoking the SiteInst query engine */
export type StringInstViewQueryEngineResult = QueryEngineResult & {
  __typename?: 'StringInstViewQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<StringInstView>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type StringMetadataDataset = Dataset & {
  __typename?: 'StringMetadataDataset';
  data?: Maybe<StringMetadataTimeSeries>;
  start?: Maybe<Scalars['Timestamp']>;
  end?: Maybe<Scalars['Timestamp']>;
  interval?: Maybe<Scalars['String']>;
};

export type StringMetadataTimeSeries = Timeseries & {
  __typename?: 'StringMetadataTimeSeries';
  stringPosition?: Maybe<Scalars['String']>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  stateOfCharge: Array<Maybe<Scalars['Float']>>;
  stateOfChargeMin: Array<Maybe<Scalars['Float']>>;
  stateOfChargeMax: Array<Maybe<Scalars['Float']>>;
};

export type StringTimeSeries = Timeseries & {
  __typename?: 'StringTimeSeries';
  stringPosition?: Maybe<Scalars['String']>;
  timestamps: Array<Maybe<Scalars['Timestamp']>>;
  voltage?: Maybe<Array<Maybe<Scalars['Float']>>>;
  current?: Maybe<Array<Maybe<Scalars['Float']>>>;
  temperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
  maxModuleTemperature?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  chargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeCapacity?: Maybe<Array<Maybe<Scalars['Float']>>>;
  dischargeEnergy?: Maybe<Array<Maybe<Scalars['Float']>>>;
  esvMin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  esvMax?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** the battery positions with the min value */
  esvMinPos?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
  /** the battery positions with the max value */
  esvMaxPos?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
};

export type SubgroupInst = {
  __typename?: 'SubgroupInst';
  id: Scalars['ID'];
  eosSubgroupId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteId: Scalars['ID'];
  isActive: Scalars['Boolean'];
  blocks: BlockInstViewQueryEngineResult;
  site: SiteInst;
  energyRating?: Maybe<Scalars['Float']>;
  powerRating?: Maybe<Scalars['Float']>;
  blockTimeSeries?: Maybe<Array<BlockDataset>>;
  aggregatedBlockTimeSeries?: Maybe<AggregatedBlockDataset>;
  aggregatedBlockMetadataTimeSeries?: Maybe<AggregatedBlockMetadataDataset>;
  alertCount: AlertCountResponse;
  /** number of stack installations in subgroup */
  stackCount?: Maybe<Scalars['Int']>;
  /** number of block installations in subgroup */
  blockCount?: Maybe<Scalars['Int']>;
  /** number of string installations in subgroup */
  stringCount?: Maybe<Scalars['Int']>;
  /** number of battery installations in subgroup */
  batteryCount?: Maybe<Scalars['Int']>;
};


export type SubgroupInstBlocksArgs = {
  orderings?: Maybe<Array<OrderingInput>>;
  pagination?: Maybe<PaginationInput>;
};


export type SubgroupInstBlockTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type SubgroupInstAggregatedBlockTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};


export type SubgroupInstAggregatedBlockMetadataTimeSeriesArgs = {
  pagination?: Maybe<PaginationInput>;
  sortDirection?: Maybe<Direction>;
  filtering?: Maybe<FilterInput>;
};

/**
 * type ConfigFile {
 *     id: ID!
 *     version: String
 *     fileLocation: String!
 *     uploadedAt: Timestamp
 *     isActive: Boolean!
 * }
 */
export type SubgroupInstCycleStats = {
  __typename?: 'SubgroupInstCycleStats';
  id: Scalars['ID'];
  subgroupId: Scalars['ID'];
  cycleStartedAt?: Maybe<Scalars['Timestamp']>;
  cycleEndedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleStartedAt?: Maybe<Scalars['Timestamp']>;
  dstCycleEndedAt?: Maybe<Scalars['Timestamp']>;
  cycle?: Maybe<Scalars['Int']>;
  systemChargeTimeMax?: Maybe<Scalars['Int']>;
  systemPrimaryDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemSecondaryDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemTotalDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemChargeEnergySum?: Maybe<Scalars['Float']>;
  systemPrimaryDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemSecondaryDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemTotalDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyLifetime?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyLifetime?: Maybe<Scalars['Float']>;
  systemAvChargePowerSum?: Maybe<Scalars['Float']>;
  systemAvPrimaryDischargePowerSum?: Maybe<Scalars['Float']>;
  systemAvSecondaryDischargePowerSum?: Maybe<Scalars['Float']>;
  systemAvTotalDischargePowerSum?: Maybe<Scalars['Float']>;
  subgroup: SubgroupInst;
  systemTotalEfficiencyMax?: Maybe<Scalars['Float']>;
  systemTotalEfficiencyMin?: Maybe<Scalars['Float']>;
  systemTotalEfficiencyAvg?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiencyMax?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiencyMin?: Maybe<Scalars['Float']>;
  systemPrimaryEfficiencyAvg?: Maybe<Scalars['Float']>;
  minTempMin?: Maybe<Scalars['Float']>;
  avgTempAvg?: Maybe<Scalars['Float']>;
  maxTempMax?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergySum?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergySum?: Maybe<Scalars['Float']>;
  systemStatelessChargeTimeMax?: Maybe<Scalars['Int']>;
  systemStatelessDischargeTimeMax?: Maybe<Scalars['Int']>;
  systemStatelessChargeEnergyMin?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyMax?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyAvg?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyMin?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyMax?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyAvg?: Maybe<Scalars['Float']>;
  systemStatelessChargeTimeMin?: Maybe<Scalars['Int']>;
  systemStatelessChargeTimeAvg?: Maybe<Scalars['Float']>;
  systemStatelessDischargeTimeMin?: Maybe<Scalars['Int']>;
  systemStatelessDischargeTimeAvg?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerMin?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerMax?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerAvg?: Maybe<Scalars['Float']>;
  systemStatelessAvChargePowerSum?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerMin?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerMax?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerAvg?: Maybe<Scalars['Float']>;
  systemStatelessAvDischargePowerSum?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacityMin?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacityMax?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacityAvg?: Maybe<Scalars['Float']>;
  systemStatelessChargeCapacitySum?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacityMin?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacityMax?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacityAvg?: Maybe<Scalars['Float']>;
  systemStatelessDischargeCapacitySum?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiencyMin?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiencyMax?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiencyAvg?: Maybe<Scalars['Float']>;
  systemStatelessCoulombicEfficiency?: Maybe<Scalars['Float']>;
  systemStatelessChargeEnergyAvgPerString?: Maybe<Scalars['Float']>;
  systemStatelessDischargeEnergyAvgPerString?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiency?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiencyMin?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiencyAvg?: Maybe<Scalars['Float']>;
  systemStatelessEnergyEfficiencyMax?: Maybe<Scalars['Float']>;
  avgSiteAmbientTemp?: Maybe<Scalars['Float']>;
  maxSiteAmbientTemp?: Maybe<Scalars['Float']>;
  minSiteAmbientTemp?: Maybe<Scalars['Float']>;
};

export type SubgroupInstCycleStatsQueryEngineResult = {
  __typename?: 'SubgroupInstCycleStatsQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<SubgroupInstCycleStats>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
  csvDownloadPath?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  zoneId?: Maybe<Scalars['String']>;
};

export type SubgroupInstInput = {
  eosSubgroupId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  powerRating?: Maybe<Scalars['Float']>;
  energyRating?: Maybe<Scalars['Float']>;
  siteId?: Maybe<Scalars['Int']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

/** The typed result of invoking the SiteInst query engine */
export type SubgroupInstQueryEngineResult = QueryEngineResult & {
  __typename?: 'SubgroupInstQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<SubgroupInst>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type Timeseries = {
  timestamps?: Maybe<Array<Maybe<Scalars['Timestamp']>>>;
};


export type UpdateBatteryTestCollectionInput = {
  /** ID of the collection to update; the name is not enough because duplicate names */
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  subscribe?: Maybe<Scalars['Boolean']>;
  favorite?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  delete?: Maybe<Scalars['Boolean']>;
  copy?: Maybe<Scalars['Boolean']>;
  uiState?: Maybe<Array<KeyValuePairUpdate>>;
  /** JSON; TODO type -> ConstraintGroup */
  filter?: Maybe<Scalars['String']>;
};

export type UpdateCollectionInput = {
  /** ID of the collection to update; the name is not enough because duplicate names */
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  /** JSON; TODO type -> ConstraintGroup */
  filter?: Maybe<Scalars['String']>;
  predicate?: Maybe<PredicateInput>;
  groupedPredicate?: Maybe<PredicateInput>;
  subscribe?: Maybe<Scalars['Boolean']>;
  favorite?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  delete?: Maybe<Scalars['Boolean']>;
  copy?: Maybe<Scalars['Boolean']>;
  uiState?: Maybe<Array<KeyValuePairUpdate>>;
};

export type UpdateMfgBatteryCollectionInput = {
  /** ID of the collection to update; the name is not enough because duplicate names */
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  predicate?: Maybe<PredicateInput>;
  subscribe?: Maybe<Scalars['Boolean']>;
  favorite?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  delete?: Maybe<Scalars['Boolean']>;
  copy?: Maybe<Scalars['Boolean']>;
  uiState?: Maybe<Array<KeyValuePairUpdate>>;
};

export type UpdateUserUiState = {
  uiState?: Maybe<Array<KeyValuePairUpdate>>;
};

export enum UseCase {
  /** For battery */
  Commercial = 'COMMERCIAL',
  NonCommercial = 'NON_COMMERCIAL',
  /** For container (static/production) */
  ContainerStatic = 'CONTAINER_STATIC',
  ContainerProduction = 'CONTAINER_PRODUCTION'
}

/** A user */
export type User = {
  __typename?: 'User';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The user's first name
   * @deprecated Use camel-case variant
   */
  first_name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /**
   * The user's last name
   * @deprecated Use camel-case variant
   */
  last_name?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** The user's initials */
  initials?: Maybe<Scalars['String']>;
  /** The user's email address */
  email?: Maybe<Scalars['String']>;
  /** The permissions that have been granted to this user */
  permissions?: Maybe<Array<Scalars['String']>>;
  /** key value store for ui state */
  uiState?: Maybe<Scalars['String']>;
  /**
   * Whether this user is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  /** The id of the site at which this user operates */
  siteId?: Maybe<Scalars['ID']>;
  /** The site at which this user operates */
  site?: Maybe<Site>;
  /** The id of the department at which this user operates */
  departmentId?: Maybe<Scalars['ID']>;
  /** The department under which this user operates */
  department?: Maybe<Department>;
};


/** A user */
export type UserUiStateArgs = {
  key: Scalars['String'];
};

/** The typed result of invoking the User query engine */
export type UserQueryEngineResult = QueryEngineResult & {
  __typename?: 'UserQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<User>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type UserUiState = {
  __typename?: 'UserUiState';
  id?: Maybe<Scalars['ID']>;
  userId: Scalars['ID'];
};

export type UserUpdate = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

/** Validation Ranges */
export type ValidationRangesInput = {
  id: Scalars['ID'];
  defaultMin?: Maybe<Scalars['Float']>;
  defaultMax?: Maybe<Scalars['Float']>;
  ncrCode?: Maybe<Scalars['String']>;
  extendedMin?: Maybe<Scalars['Float']>;
  extendedMax?: Maybe<Scalars['Float']>;
};

export type ValidationRangesOutput = {
  __typename?: 'ValidationRangesOutput';
  id: Scalars['ID'];
  defaultMin: Scalars['Float'];
  defaultMax: Scalars['Float'];
  ncrCode?: Maybe<Scalars['String']>;
  extendedMin?: Maybe<Scalars['Float']>;
  extendedMax?: Maybe<Scalars['Float']>;
};

export type ValidationRangesView = {
  __typename?: 'ValidationRangesView';
  id: Scalars['ID'];
  displayName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  stationSection?: Maybe<Scalars['String']>;
  uom?: Maybe<Scalars['String']>;
  defaultMin?: Maybe<Scalars['Float']>;
  defaultMax?: Maybe<Scalars['Float']>;
  extendedMin?: Maybe<Scalars['Float']>;
  extendedMax?: Maybe<Scalars['Float']>;
  ncrCode?: Maybe<Scalars['String']>;
  specCreatedAt?: Maybe<Scalars['Timestamp']>;
  specLastUpdatedAt?: Maybe<Scalars['Timestamp']>;
  displayRank?: Maybe<Scalars['Float']>;
};

export type ValidationRangesViewEngineResult = QueryEngineResult & {
  __typename?: 'ValidationRangesViewEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<ValidationRangesView>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type ValidationResponse = {
  __typename?: 'ValidationResponse';
  flag?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
};

/** An entity that sells components */
export type Vendor = {
  __typename?: 'Vendor';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** The vendor's code */
  code?: Maybe<Scalars['String']>;
  /** The vendor's name */
  name: Scalars['String'];
  /** The vendor's email address */
  email?: Maybe<Scalars['String']>;
  /**
   * Whether this is active
   * @deprecated Use camel-case variant
   */
  is_active: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  partCategories: Array<PartCategory>;
};

/** The typed result of invoking the Vendor query engine */
export type VendorQueryEngineResult = QueryEngineResult & {
  __typename?: 'VendorQueryEngineResult';
  /** A list of objects that are filtered, sorted, and paginated according to the request's parameters */
  results: Array<Vendor>;
  resultCount: Scalars['Int'];
  /** The number of objects in the database that match the request's predicate */
  totalCount: Scalars['Int'];
};

export type VendorUpdate = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  partCategoryIds?: Maybe<Array<Scalars['ID']>>;
};

export type Versions = {
  __typename?: 'Versions';
  versionNum?: Maybe<Scalars['Int']>;
  versionName?: Maybe<Scalars['String']>;
};

export type WashProcess = {
  __typename?: 'WashProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery that is washed
   * @deprecated Use camel-case variant
   */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /**
   * Whether the battery was washed in a specific way
   * @deprecated Use camel-case variant
   */
  ti_plate_post_fire_alconox_washed?: Maybe<Scalars['Boolean']>;
  tiPlatePostFireAlconoxWashed?: Maybe<Scalars['Boolean']>;
  /** Comments about the washing process */
  notes?: Maybe<Scalars['String']>;
  /** The washer */
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  /**
   * When the cathode was washed
   * @deprecated Use camel-case variant
   */
  cathode_washed_at?: Maybe<Scalars['Timestamp']>;
  cathodeWashedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * When the anode was washed
   * @deprecated Use camel-case variant
   */
  anode_washed_at?: Maybe<Scalars['Timestamp']>;
  anodeWashedAt?: Maybe<Scalars['Timestamp']>;
};

export type WashProcessUpdate = {
  battery_serial_number: Scalars['String'];
  ti_plate_post_fire_alconox_washed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  cathode_washed_at?: Maybe<Scalars['Timestamp']>;
  anode_washed_at?: Maybe<Scalars['Timestamp']>;
  operator_id?: Maybe<Scalars['ID']>;
};

/** WEIGHING STATION TRAVELER */
export type WeighingBusBarInput = {
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  shortTorque?: Maybe<Scalars['Float']>;
  longTorque?: Maybe<Scalars['Float']>;
  performed?: Maybe<Scalars['Boolean']>;
  busbarLotNumber?: Maybe<Scalars['String']>;
  busbarLotNumbers?: Maybe<Array<Maybe<LotNumbersInput>>>;
};

export type WeighingBusBarOutput = {
  __typename?: 'WeighingBusBarOutput';
  /** @deprecated use busbarLotNumbers */
  busbarLotNumber?: Maybe<Scalars['String']>;
  shortTorque?: Maybe<Scalars['Float']>;
  longTorque?: Maybe<Scalars['Float']>;
  performed?: Maybe<Scalars['Boolean']>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  busbarLotNumbers?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WeighingGasChannelInput = {
  flatnessPassed?: Maybe<Scalars['Boolean']>;
  depthPassed?: Maybe<Scalars['Boolean']>;
  performed?: Maybe<Scalars['Boolean']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type WeighingGasChannelOutput = {
  __typename?: 'WeighingGasChannelOutput';
  isFlatnessPassed?: Maybe<Scalars['Boolean']>;
  isDepthPassed?: Maybe<Scalars['Boolean']>;
  deviation?: Maybe<Scalars['String']>;
  performed?: Maybe<Scalars['Boolean']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  userName?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WeighingMeasureInput = {
  dryWeight?: Maybe<Scalars['Float']>;
  topLeftCorner?: Maybe<Scalars['Float']>;
  topRightCorner?: Maybe<Scalars['Float']>;
  bottomRightCorner?: Maybe<Scalars['Float']>;
  bottomLeftCorner?: Maybe<Scalars['Float']>;
  batterySerialNumber: Scalars['String'];
  receivedAt?: Maybe<Scalars['Timestamp']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
};

export type WeighingMeasureOutput = {
  __typename?: 'WeighingMeasureOutput';
  dryWeight?: Maybe<Scalars['Float']>;
  topLeftCorner?: Maybe<Scalars['Float']>;
  topRightCorner?: Maybe<Scalars['Float']>;
  bottomRightCorner?: Maybe<Scalars['Float']>;
  bottomLeftCorner?: Maybe<Scalars['Float']>;
  deviation?: Maybe<Scalars['String']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  userName?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  comments?: Maybe<Scalars['String']>;
  ncrCodesInSection?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type WeighingStationSummary = {
  __typename?: 'WeighingStationSummary';
  /** @deprecated Use weighingBusBar */
  weighingBusBarSummary?: Maybe<WeighingBusBarOutput>;
  /** @deprecated Use weighingMeasure */
  weighingMeasureSummary?: Maybe<WeighingMeasureOutput>;
  /** @deprecated Use weighingGasChannelRouting */
  weighingGasChannelRoutingSummary?: Maybe<WeighingGasChannelOutput>;
  weighingBusBar?: Maybe<WeighingBusBarOutput>;
  weighingMeasure?: Maybe<WeighingMeasureOutput>;
  weighingGasChannelRouting?: Maybe<WeighingGasChannelOutput>;
  weighingReworkInstruction?: Maybe<BatteryCommentsView>;
  weighingQuarantineComments?: Maybe<BatteryCommentsView>;
  weighingSubmitComments?: Maybe<BatteryCommentsView>;
};

export type WeighingValidation = {
  __typename?: 'WeighingValidation';
  isGcInvalidated?: Maybe<Scalars['Boolean']>;
  isWeighingMeasureInvalidated?: Maybe<Scalars['Boolean']>;
  isBusBarInvalidated?: Maybe<Scalars['Boolean']>;
  isGcCompleted?: Maybe<Scalars['Boolean']>;
  isWeighingMeasureCompleted?: Maybe<Scalars['Boolean']>;
  isBusBarCompleted?: Maybe<Scalars['Boolean']>;
  isWeighingSubmittable?: Maybe<Scalars['Boolean']>;
};

export type WeldProcess = {
  __typename?: 'WeldProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /**
   * The battery that is welded
   * @deprecated Use camel-case variant
   */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /**
   * The puck used in the welding process
   * @deprecated Use 'puckType'
   */
  puck_design?: Maybe<PuckType>;
  puckTypeId?: Maybe<Scalars['ID']>;
  puckType?: Maybe<PuckType>;
  /** Comments about this process */
  notes?: Maybe<Scalars['String']>;
  /** The welder */
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  /**
   * When the cathode was welded
   * @deprecated Use camel-case variant
   */
  cathode_welded_at?: Maybe<Scalars['Timestamp']>;
  cathodeWeldedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * When the anode was welded
   * @deprecated Use camel-case variant
   */
  anode_welded_at?: Maybe<Scalars['Timestamp']>;
  anodeWeldedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * Whether the welding electrodes were charged
   * @deprecated Use camel-case variant
   */
  welding_electrodes_charged?: Maybe<Scalars['Boolean']>;
  weldingElectrodesCharged?: Maybe<Scalars['Boolean']>;
};

export type WeldProcessUpdate = {
  battery_serial_number: Scalars['String'];
  /** TODO do we want to input a puck id or design id? */
  puck_type_id?: Maybe<Scalars['ID']>;
  /** JSON */
  notes?: Maybe<Scalars['String']>;
  cathode_welded_at?: Maybe<Scalars['Timestamp']>;
  anode_welded_at?: Maybe<Scalars['Timestamp']>;
  welding_electrodes_charged?: Maybe<Scalars['Boolean']>;
  operator_id?: Maybe<Scalars['ID']>;
};

export type WelderLines = {
  __typename?: 'WelderLines';
  id: Scalars['ID'];
  locationCode?: Maybe<Scalars['String']>;
  locationId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  manufacturing?: Maybe<Scalars['String']>;
  serialNumber?: Maybe<Scalars['String']>;
  modelNumber?: Maybe<Scalars['String']>;
  assemblyLine?: Maybe<Scalars['Int']>;
};

export enum WelderStatus {
  WeldInProgress = 'WELD_IN_PROGRESS',
  WelderError = 'WELDER_ERROR',
  WeldComplete = 'WELD_COMPLETE'
}

export type WeldingResultsAndPrinting = {
  __typename?: 'WeldingResultsAndPrinting';
  performed?: Maybe<Scalars['Boolean']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
};

export type WeldingResultsAndPrintingInput = {
  performed?: Maybe<Scalars['Boolean']>;
  receivedAt?: Maybe<Scalars['Timestamp']>;
  comments?: Maybe<Scalars['String']>;
  receivedBy?: Maybe<Scalars['ID']>;
  batterySerialNumber: Scalars['String'];
};

export type WeldingStationAutoDetail = {
  __typename?: 'WeldingStationAutoDetail';
  preWeldHeaterPlaten?: Maybe<Scalars['Float']>;
  postWeldHeaterPlaten?: Maybe<Scalars['Float']>;
  upperPlaten?: Maybe<Scalars['Float']>;
  lowerPlaten?: Maybe<Scalars['Float']>;
  stackingCycleCurrent?: Maybe<Scalars['Int']>;
  totalCycleTime?: Maybe<Scalars['Int']>;
  transitionTime?: Maybe<Scalars['Int']>;
  isWelderFaulted?: Maybe<Scalars['Boolean']>;
  welderAlarmMessage?: Maybe<Scalars['String']>;
  processedAt?: Maybe<Scalars['Timestamp']>;
};

export type WeldingStationAutoOutput = {
  __typename?: 'WeldingStationAutoOutput';
  welderStartTime?: Maybe<Scalars['Timestamp']>;
  welderStopTime?: Maybe<Scalars['Timestamp']>;
  welderStatus?: Maybe<WelderStatus>;
  weldingStationAutoDetails?: Maybe<Array<Maybe<WeldingStationAutoDetail>>>;
};

export type WeldingStationSummaryOutput = {
  __typename?: 'WeldingStationSummaryOutput';
  weldingStationId?: Maybe<Scalars['Int']>;
  batterySerialNumber?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  /** Printing Page */
  performed?: Maybe<Scalars['Boolean']>;
  printingReceivedAt?: Maybe<Scalars['Timestamp']>;
  printingOperator?: Maybe<Scalars['String']>;
  printingComments?: Maybe<Scalars['String']>;
  printingOperatorId?: Maybe<Scalars['ID']>;
  printingDeviation?: Maybe<Scalars['String']>;
  printingNcrCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** FrameTraceabilitySummary */
  frameTraceabilityComments?: Maybe<Scalars['String']>;
  frameTraceabilityOperator?: Maybe<Scalars['String']>;
  frameTraceabilityOperatorId?: Maybe<Scalars['ID']>;
  frameTraceabilityReceivedAt?: Maybe<Scalars['Timestamp']>;
  positiveTerminals?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  negativeTerminals?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  neutralFrames?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  terminalFrames?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  bipolarPlates?: Maybe<Array<Maybe<ComponentLotOutput>>>;
  frameTraceabilityDeviation?: Maybe<Scalars['String']>;
  frameTraceabilityNcrCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  roomTemperature?: Maybe<Scalars['Float']>;
  roomHumidity?: Maybe<Scalars['Float']>;
  weldNutProtusionPositive?: Maybe<Scalars['Float']>;
  weldNutProtusionNegative?: Maybe<Scalars['Float']>;
  WeldingStationAutoOutput?: Maybe<WeldingStationAutoOutput>;
  weldingReworkInstruction?: Maybe<BatteryCommentsView>;
  weldingSubmitComments?: Maybe<BatteryCommentsView>;
  weldingQuarantineComments?: Maybe<BatteryCommentsView>;
};

export type WetBatteryEisTestProcess = {
  __typename?: 'WetBatteryEISTestProcess';
  /** Unique database identifier */
  id: Scalars['ID'];
  /** @deprecated Use camel-case variant */
  battery_build_matrix: BatteryBuildMatrix;
  batterySerialNumber: Scalars['String'];
  batteryBuildMatrix: BatteryBuildMatrix;
  /**
   * When this process was started
   * @deprecated Use camel-case variant
   */
  started_at?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  ohmic_resistance?: Maybe<Scalars['String']>;
  ohmicResistance?: Maybe<Scalars['Float']>;
  /**
   * Precise decimal
   * @deprecated Use camel-case variant
   */
  ocv_voltage?: Maybe<Scalars['String']>;
  ocvVoltage?: Maybe<Scalars['Float']>;
  /** @deprecated Use camel-case variant */
  battery_continuity_test_passed?: Maybe<Scalars['Boolean']>;
  batteryContinuityTestPassed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  operatorId?: Maybe<Scalars['ID']>;
  operator?: Maybe<User>;
  /**
   * TODO rename to 'tested_at'
   * @deprecated Use camel-case variant
   */
  eis_tested_at?: Maybe<Scalars['Timestamp']>;
  eisTestedAt?: Maybe<Scalars['Timestamp']>;
};

export type WetBatteryEisTestProcessUpdate = {
  battery_serial_number: Scalars['String'];
  started_at?: Maybe<Scalars['Timestamp']>;
  /** Precise decimal */
  ohmic_resistance?: Maybe<Scalars['String']>;
  ohmic_resistance_units?: Maybe<Scalars['String']>;
  /** Precise decimal */
  ocv_voltage?: Maybe<Scalars['String']>;
  battery_continuity_test_passed?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  operator_id?: Maybe<Scalars['ID']>;
  test_passed?: Maybe<Scalars['Boolean']>;
  eis_tested_at?: Maybe<Scalars['Timestamp']>;
};

export type GetCurrentUserUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'firstName' | 'lastName' | 'email'>
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { whoAmI: (
    { __typename?: 'User' }
    & GetCurrentUserUserFragment
  ) }
);

export const GetCurrentUserUserFragmentDoc = gql`
    fragment getCurrentUserUser on User {
  id
  firstName
  lastName
  email
}
    `;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  whoAmI {
    ...getCurrentUserUser
  }
}
    ${GetCurrentUserUserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetCurrentUserGQL extends Apollo.Query<GetCurrentUserQuery, GetCurrentUserQueryVariables> {
    document = GetCurrentUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }