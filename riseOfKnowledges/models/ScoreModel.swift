//
//  ScoreModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/25/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct ScoreModel: Codable, Identifiable {
    var id: UUID
    var rank: Int
    var name: String
    var score: Int
}

//struct ScorePostModel: Encodable {
//    var rank: Int
//    var name: String
//    var score: Int
//}
