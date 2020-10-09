//
//  ScoreModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/25/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct OverallScoreModel: Codable, Identifiable {
    var id: String
    var name: String
    var score: Int
}

struct datasScoreModel: Encodable {
    var answer: String
    var difficulty: String
    var userAnswer: String
}

struct UserScoreModel: Encodable, Identifiable {
    var id: String
    var name: String
    var datas: [datasScoreModel]
}
