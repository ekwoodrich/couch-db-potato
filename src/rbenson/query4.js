function(doc) {
    if (doc.docType == 'detector' && doc.locationtext == 'Foster NB') {
        emit([doc._id, 0], null);
    } else if (doc.docType == 'loop') {
        emit([doc.detectorid, 1], null);
    }
}