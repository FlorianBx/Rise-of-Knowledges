//
//  QuizzModel.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/17/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation

struct QuizzModel : Decodable, Identifiable {
    
    var id: String
    var lang: String
    var difficulty: String
    var question: String
    var answer: String
    var suggestion: [String]
    var anecdote: String
}
