export const HEADER_NOT_FOUND = (wellboreUuid, wellboreName) => ({
  code: HEADER_NOT_FOUND,
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Header not found for wellbore ${wellboreName}(${wellboreUuid}), MD and TVD is not converted to MSL`,
  shortDescription: `Unable to convert MD and TVD to MSL for ${wellboreName}}`,
});

export const MD_NOT_METERS = (wellboreUuid, wellboreName, mdUnit) => ({
  code: 'MD_NOT_METERS',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `MD unit for wellbore ${wellboreName}(${wellboreUuid}) is not meters, unit is ${mdUnit}`,
  shortDescription: `MD unit for wellbore ${wellboreName} is not in meters`,
});

export const TVD_NOT_METERS = (wellboreUuid, wellboreName, tvdUnit) => ({
  code: 'TVD_NOT_METERS',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `TVD unit for wellbore ${wellboreName}(${wellboreUuid}) is not meters, unit is ${tvdUnit}`,
  shortDescription: `TVD unit for wellbore ${wellboreName} is not in meters`,
});

export const DEPTH_REF_NOT_METERS = (wellboreUuid, wellboreName, mdUnit) => ({
  code: 'DEPTH_REF_NOT_METERS',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Depth reference elevation unit for wellbore ${wellboreName}(${wellboreUuid}) is not meters, unit is ${mdUnit}`,
  shortDescription: `Depth reference elevation unit for wellbore ${wellboreName} is not meters`,
});

export const DEPTH_REF_MD_UNIT_MISMATCH = (wellboreUuid, wellboreName, depthReferenceElevationUnit, mdUnit) => ({
  code: 'DEPTH_REF_MD_UNIT_MISMATCH',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Depth reference elevation unit ${depthReferenceElevationUnit} does not match MD unit ${mdUnit} for wellbore ${wellboreName}(${wellboreUuid})`,
  shortDescription: `Depth reference elevation unit ${depthReferenceElevationUnit} does not match MD unit ${mdUnit} for wellbore ${wellboreName}`,
});

export const DEPTH_REF_TVD_UNIT_MISMATCH = (wellboreUuid, wellboreName, depthReferenceElevationUnit, tvdUnit) => ({
  code: 'DEPTH_REF_TVD_UNIT_MISMATCH',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Depth reference elevation unit ${depthReferenceElevationUnit} does not match TVD unit ${tvdUnit} for wellbore ${wellboreName}(${wellboreUuid})`,
  shortDescription: `Depth reference elevation unit ${depthReferenceElevationUnit} does not match TVD unit ${tvdUnit} for wellbore ${wellboreName}`,
});

export const PICK_MD_NOT_METERS = (wellboreUuid, uuid, uniqueWellboreIdentifier, pickIdentifier, mdUnit) => ({
  code: 'PICK_MD_NOT_METERS',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Picks: MD unit for pick ${pickIdentifier} on wellbore ${uniqueWellboreIdentifier}(${wellboreUuid}) is ${mdUnit}`,
  shortDescription: `Picks: MD unit for pick ${pickIdentifier} on wellbore ${uniqueWellboreIdentifier} is ${mdUnit}`,
});

export const PICK_DEPTH_REF_NOT_METERS = (wellboreUuid, uuid, uniqueWellboreIdentifier, pickIdentifier, depthReferenceElevationUnit) => ({
  code: 'DEPTH_REF_NOT_METERS',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Picks: Depth reference elevation unit for pick ${pickIdentifier} on wellbore ${uniqueWellboreIdentifier}(${wellboreUuid}) is ${depthReferenceElevationUnit}`,
  shortDescription: `Picks: Depth reference elevation unit for pick ${pickIdentifier} on wellbore ${uniqueWellboreIdentifier} is ${depthReferenceElevationUnit}`,
});

export const PICK_DEPTH_REF_MD_MISMATCH = (uuid, p) => ({
  code: 'PICK_DEPTH_REF_MD_MISMATCH',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Picks: Depth reference elevation unit ${p.depthReferenceElevationUnit} does not match md unit ${p.mdUnit} for pick ${p.pickIdentifier} on wellbore ${p.uniqueWellboreIdentifier}(${p.wellboreUuid})`,
  shortDescription: `Picks: Depth reference elevation unit ${p.depthReferenceElevationUnit} does not match md unit ${p.mdUnit} for pick ${p.pickIdentifier} on wellbore ${p.uniqueWellboreIdentifier}`,
});

export const PICK_NO_DEPTH_REF = (wellboreUuid, uuid, uniqueWellboreIdentifier, pickIdentifier, source) => ({
  code: 'PICK_NO_DEPTH_REF',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Picks: No depth reference elevation for pick ${pickIdentifier} on wellbore ${uniqueWellboreIdentifier}(${wellboreUuid}) source: ${source}`,
  shortDescription: `Picks: No depth reference elevation for pick ${pickIdentifier} on wellbore ${uniqueWellboreIdentifier} source: ${source}`,
});

export const INVALID_COORDINATE_VALUES = (wellboreUuid, uniqueWellboreIdentifier) => ({
  code: 'INVALID_COORDINATE_VALUES',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Invalid values in survey samples easting/northing for ${uniqueWellboreIdentifier}(${wellboreUuid})`,
  shortDescription: `Invalid values in survey samples easting/northing for ${uniqueWellboreIdentifier}`,
});

export const DUPLICATE_TIMESTAMP = (wellboreUuid, duplicates) => ({
  code: 'DUPLICATE_TIMESTAMP',
  category: 'Production',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Production data contains ${duplicates} duplicate timestamps!`,
  shortDescription: `Production data contains ${duplicates} duplicate timestamps!`,
});

export const POSSIBLE_INVALID_VALUE = (wellboreUuid, name) => ({
  code: 'POSSIBLE_INVALID_VALUE',
  category: 'Logs',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Potential invalid values found in ${name}`,
  shortDescription: `Potential invalid values found in ${name}`,
});

export const QTZT_NOT_AVAILABLE = (wellboreIdentifier) => ({
  code: 'QTZT_NOT_AVAILABLE',
  category: 'Logs',
  severity: 'warning',
  resourceUuid: wellboreIdentifier,
  message: `QTZT is not available for wellbore ${wellboreIdentifier}, QT is calculated from QWZT, QOZT and QGZT.`,
  shortDescription: `QTZT is not available for wellbore ${wellboreIdentifier}, QT is calculated from QWZT, QOZT and QGZT.`,
});

export const NO_POSLOG = (wellboreUuid) => ({
  code: 'NO_POSLOG',
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `No position log found for ${wellboreUuid}, a vertical wellbore using information from wellbore header is provided.`,
  shortDescription: `No position log found for ${wellboreUuid}`,
});

export const SHOE_UPSIDEDOWN = (wellboreUuid, depthBottomMd, diameter, depthTopMd) => ({
  code: 'SHOE_UPSIDEDOWN',
  category: 'Casing',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `${diameter} shoe bottom at ${depthBottomMd} is above shoe top at ${depthTopMd}`,
  shortDescription: `${diameter} shoe bottom at ${depthBottomMd} is above shoe top at ${depthTopMd}`,
});

export const SHOE_NO_HEIGHT = (wellboreUuid, diameter, depthTopMd) => ({
  code: 'SHOE_NO_HEIGHT',
  category: 'Casing',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `${diameter} shoe at ${depthTopMd} has no height`,
  shortDescription: `${diameter} shoe at ${depthTopMd} has no height`,
});

export const SHOE_BOTTOM_ABOVE_TOP_CASING = (wellboreUuid, shoe, diameter, top) => ({
  code: 'SHOE_BOTTOM_ABOVE_TOP_CASING',
  category: 'Casing',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `${shoe.diameter} shoe bottom at ${shoe.bottom} is above top of ${diameter} casing at ${top}`,
  shortDescription: `${shoe.diameter} shoe bottom at ${shoe.bottom} is above top of ${diameter} casing at ${top}`,
});

export const SHOE_TOP_BELOW_BOTTOM_CASING = (wellboreUuid, shoe, diameter, bottom) => ({
  code: 'SHOE_TOP_BELOW_BOTTOM_CASING',
  category: 'Casing',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `${shoe.diameter} shoe top at ${shoe.top} is below bottom of ${diameter} casing at ${bottom}`,
  shortDescription: `${shoe.diameter} shoe top at ${shoe.top} is below bottom of ${diameter} casing at ${bottom}`,
});

export const MISSING_WGS84_COORDS = (wellboreUuid, uniqueWellboreIdentifier, uuid) => ({
  code: 'MISSING_WGS84_COORDS',
  category: 'exploration',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Exploration wellbore: ${uniqueWellboreIdentifier}, uuid: ${wellboreUuid}, Data issue: missing WGS84 coordinate data. Wellbore skipped.`,
  shortDescription: `missing WGS84 coordinate data. Wellbore ${uniqueWellboreIdentifier} skipped.`,
});

export const PICKS_UNABLE_TO_MATCH_PAIR = (uuid, match, current, alternative) => ({
  code: 'PICKS_UNABLE_TO_MATCH_PAIR',
  category: 'Picks',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Unable to find ${match.name} pick for ${current.name}, using ${alternative.identifier} as base for ${current.name}`,
  shortDescription: `Unable to find ${match.name} pick for ${current.name}`,
});

export const PICKS_UNABLE_TO_FIND_TOP = (uuid, match, current) => ({
  code: 'PICKS_UNABLE_TO_FIND_TOP',
  category: 'Picks',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Unable to find ${match.name} top pick for ${current.name} pick at ${current.pick.md}, ignored`,
  shortDescription: `Unable to find ${match.name} top pick for ${current.name} pick at ${current.pick.md}`,
});

export const UNABLE_TO_MATCH_TOP_OR_BASE = (uuid, current) => ({
  code: 'UNABLE_TO_MATCH_TOP_OR_BASE',
  category: 'Picks',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Unable to match ${current.name} pick with top or base surface, pick is ignored`,
  shortDescription: `Unable to match ${current.name} pick with top or base surface`,
});

/**
 *
 * @param {*} uuid
 * @param {*} pickIdentifier
 * @param {*} mdMsl pick entry or exit md msl
 * @param {*} calculatedTvd calculated entry or exit tvd
 * @param {*} tvdMslOrg source entry or exit tvd
 * @param {*} tvdDifference difference between calculated and source
 * @returns
 */
export const CALCULATED_TVD_NOT_MATCHING_SOURCE = (uuid, pickIdentifier, mdMsl, calculatedTvd, tvdMslOrg, tvdDifference) => ({
  code: 'CALCULATED_TVD_NOT_MATCHING_SOURCE',
  category: 'Logs',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Calculated pick TVD for ${pickIdentifier} at ${mdMsl}m MD MSL does not match TVD from source (calculated ${calculatedTvd}m TVD MSL, source ${tvdMslOrg}m TVD MSL, a ${tvdDifference}m difference)`,
  shortDescription: `Calculated pick TVD for ${pickIdentifier} at ${mdMsl}m MD MSL does not match TVD from source `,
});

export const MIN_VALUE_NEGATIVE = (wellboreUuid, key, min) => ({
  code: 'MIN_VALUE_NEGATIVE',
  category: 'Production',
  severity: 'warning',
  resourceUuid: wellboreUuid,
  message: `Potential data error, minimum value for ${key} is negative(${min})`,
  shortDescription: `Potential data error, minimum value for ${key} is negative(${min})`,
});

export const CALCULATED_TRAJECTORY_DIFFERENT_FROM_DRILLED = (uuid, totalDepthDrillerMd, length) => ({
  category: 'Other wellbores',
  severity: 'warning',
  resourceUuid: uuid,
  message: `Calculated wellbore trajectory length ${totalDepthDrillerMd}m MD RKB differ from total depth driller ${length}m MD RKB`,
  shortDescription: 'Calculated wellbore trajectory length differ from drilled',
});
